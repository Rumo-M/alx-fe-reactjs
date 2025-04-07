import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Search from './Search';
import githubService from '../services/githubService';

// Mocking githubService
jest.mock('../services/githubService');

describe('Search Component', () => {
  beforeEach(() => {
    // Clear mocks before each test to ensure no stale data
    jest.clearAllMocks();
  });

  it('should make an API call and display users when form is submitted', async () => {
    // Mock successful API response
    const mockResponse = {
      items: [
        {
          id: 1,
          login: 'user1',
          avatar_url: 'https://example.com/avatar1.png',
          html_url: 'https://github.com/user1',
          location: 'Location 1',
        },
        {
          id: 2,
          login: 'user2',
          avatar_url: 'https://example.com/avatar2.png',
          html_url: 'https://github.com/user2',
          location: 'Location 2',
        },
      ],
    };

    // Set up mock for githubService.searchUsers to return the mock response
    githubService.searchUsers.mockResolvedValue(mockResponse);

    render(<Search />);

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Search for a GitHub user'), {
      target: { value: 'user' },
    });
    fireEvent.change(screen.getByPlaceholderText('Location'), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByPlaceholderText('Minimum repositories'), {
      target: { value: '' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Search'));

    // Wait for the users to be rendered
    await waitFor(() => screen.getByText('user1'));

    // Assert that the API was called correctly
    expect(githubService.searchUsers).toHaveBeenCalledWith('user', '', '');

    // Assert that the users are displayed
    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
  });

  it('should show an error message when no users are found', async () => {
    // Mock empty API response
    const mockResponse = { items: [] };

    // Set up mock for githubService.searchUsers to return the mock response
    githubService.searchUsers.mockResolvedValue(mockResponse);

    render(<Search />);

    // Fill in the form
    fireEvent.change(screen.getByPlaceholderText('Search for a GitHub user'), {
      target: { value: 'nonexistentuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Location'), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByPlaceholderText('Minimum repositories'), {
      target: { value: '' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Search'));

    // Wait for the error message to be rendered
    await waitFor(() => screen.getByText("Looks like we can't find the user"));

    // Assert that the error message is displayed
    expect(screen.getByText("Looks like we can't find the user")).toBeInTheDocument();
  });

  it('should display a loading message while fetching data', async () => {
    // Mock delayed response
    githubService.searchUsers.mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve({ items: [] }), 2000))
    );

    render(<Search />);

    // Submit the form
    fireEvent.click(screen.getByText('Search'));

    // Assert that the loading message is shown
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the loading message to disappear after data is fetched
    await waitFor(() => expect(screen.queryByText('Loading...')).toBeNull());
  });

  it('should handle API errors and display an error message', async () => {
    // Mock API error
    githubService.searchUsers.mockRejectedValue(new Error('API error'));

    render(<Search />);

    // Submit the form
    fireEvent.click(screen.getByText('Search'));

    // Wait for the error message to be displayed
    await waitFor(() => screen.getByText('Something went wrong. Please try again later.'));

    // Assert that the error message is shown
    expect(screen.getByText('Something went wrong. Please try again later.')).toBeInTheDocument();
  });
});
