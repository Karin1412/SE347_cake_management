# Calculate the accuracy
accuracy = np.mean(np.abs(y_pred - y) / y) * 100

print(f"Accuracy: {accuracy}%")