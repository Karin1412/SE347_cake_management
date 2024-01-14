import numpy as np

# Assuming you have your data stored in X and y variables
X = np.array([[1], [2], [3], [4], [5]])  # Input features
y = np.array([2, 4, 6, 8, 10])  # Target variable

# Add a column of ones to X for the bias term
X = np.hstack((np.ones((X.shape[0], 1)), X))

# Initialize the parameters
theta = np.zeros(X.shape[1])

# Set the learning rate and number of iterations
learning_rate = 0.01
num_iterations = 1000

# Perform gradient descent
for _ in range(num_iterations):
    # Calculate the predicted values
    y_pred = np.dot(X, theta)
    
    # Calculate the error
    error = y_pred - y
    
    # Update the parameters
    theta -= learning_rate * np.dot(X.T, error) / X.shape[0]

# Predict using the trained model
X_test = np.array([[6], [7], [8]])  # New input features for prediction
X_test = np.hstack((np.ones((X_test.shape[0], 1)), X_test))
y_pred = np.dot(X_test, theta)

print(y_pred)  # Print the predicted values
# Calculate the accuracy
accuracy = np.mean(np.abs(y_pred - y) / y) * 100

print(f"Accuracy: {accuracy}%")