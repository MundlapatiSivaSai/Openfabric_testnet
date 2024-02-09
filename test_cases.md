# Openfabric Testnet: Test Cases

This document outlines a comprehensive set of test cases for the User module of the Openfabric testnet. The User module is crucial for enabling interactions with various applications such as QRFabric, ArtFabric, MemeFabric, SoundFabric. These test cases aim to ensure that users can effectively use these applications to generate QR, images, memes, and music based on custom prompts.

## Test Case Format

- **Test Case ID**: Unique identifier.
- **Test Scenario**: Brief description of the scenario being tested.
- **Preconditions**: Conditions that must be met before the test can be executed.
- **Test Steps**: Step-by-step instructions to execute the test.
- **Expected Result**: The outcome that should occur if the test passes.
- **Actual Result**: The outcome that occurred during the test (to be filled out during testing).
- **Status**: Pass or Fail (to be filled out during testing).
- **Comments**: Any additional information or observations.

## Positive Test Cases

### PTC-01: Generate Image with Custom Prompt
- **Test Scenario**: User generates an image using a custom prompt in the Stable Diffusion Application.
- **Preconditions**: User is logged into the Openfabric testnet.
- **Test Steps**:
  1. Navigate to the ArtFabric Application.
  2. Enter a custom prompt in the input field.
  3. Click the "Run" button.
- **Expected Result**: The application generates an image that aligns with the custom prompt.

### PTC-02: Generate Meme with Custom Theme
- **Test Scenario**: User generates a meme using a specified image description and theme.
- **Preconditions**: User is logged into the Openfabric testnet.
- **Test Steps**:
  1. Access the MemeFabric.
  2. Input the desired background image description, theme and position.
  3. Click the "Run" button.
- **Expected Result**: A meme is generated that matches the input description, theme and position.

### PTC-03: Create Music Track from Text Prompt
- **Test Scenario**: User creates a music track using a text prompt in SoundFabric.
- **Preconditions**: User is logged into the Openfabric testnet.
- **Test Steps**:
  1. Go to SoundFabric.
  2. Enter a text prompt for the music track.
  3. Click the "Run" button.
- **Expected Result**: A music track is synthesized that reflects the input text prompt.

### PTC-04: Valid Deployment
- **Preconditions**: Developer account is created, and there are sufficient $OFN tokens available.
- **Test Steps**:
  1. Log in to the developer account.
  2. Navigate to the AI Marketplace.
  3. Select an AI-App and click "create instance."
  4. Fill in all required fields correctly and submit.
- **Expected Result**: AI-App is deployed successfully and is ready for use.

### PTC-05: Deployment Status
- **Preconditions**: AI-App has been submitted for deployment.
- **Test Steps**:
  1. Log in to the account.
  2. Go to the installed apps .
  3. Locate the deployed AI-App and check its status.
- **Expected Result**: The current status of the AI-App is displayed accurately.

### PTC-06: Retrieve Deployment Logs
- **Preconditions**: AI-App has been deployed.
- **Test Steps**:
  1. Log in to the account.
  2. Go to the AI-App details.
  3. Access the deployment logs section.
- **Expected Result**: Deployment logs are displayed with detailed information.

### PTC-07: Delete AI-App
- **Preconditions**: AI-App is deployed and is no longer needed.
- **Test Steps**:
  1. Log in to the account.
  2. Access the AI-App details.
  3. Initiate the deletion process.
- **Expected Result**: AI-App is deleted successfully with confirmation.

### PTC-08: Generate AI-Enhanced QR Code
- **Test Scenario**: User generates a QR code with AI-powered beautification.
- **Preconditions**: User is logged into the Openfabric testnet and has access to QRFabric.
- **Test Steps**:
  1. Navigate to the QRFabric application.
  2. Input the desired data for the QR code.
  3. Select options for AI-powered beautification.
  4. Click the "RUN" button.
- **Expected Result**: A QR code is generated that not only encodes the desired data but also features visually appealing designs beyond traditional patterns.

### PTC-9: Customization Options
- **Test Scenario**: User utilizes customization options for QR code generation.
- **Preconditions**: User is logged into the Openfabric testnet and is on the QRFabric application page.
- **Test Steps**:
  1. Input necessary data for the QR code.
  2. Explore and select various customization options
  3. Generate the QR code.
- **Expected Result**: The generated QR code reflects the selected customization options, showcasing enhanced visual appeal.

## Negative Test Cases

### NTC-01: Generate Image with Empty Prompt
- **Test Scenario**: User attempts to generate an image without entering a prompt.
- **Preconditions**: User is logged into the Openfabric testnet.
- **Test Steps**:
  1. Navigate to the ArtFabric Application.
  2. Leave the prompt input field empty.
  3. Click the "RUN" button.
- **Expected Result**: The application displays an error message indicating the prompt is required.

### NTC-02: Generate Meme with Incomplete Input
- **Test Scenario**: User attempts to generate a meme without specifying the theme.
- **Preconditions**: User is logged into the Openfabric testnet.
- **Test Steps**:
  1. Access the meme generation feature.
  2. Input a background image description but leave the theme field empty.
  3. Click the "RUN" button.
- **Expected Result**: An error message is displayed indicating that all fields must be filled.

### NTC-03: Create Music Track with Blank Prompt
- **Test Scenario**: User attempts to create a music track in SoundFabric without entering a prompt.
- **Preconditions**: User is logged into the Openfabric testnet.
- **Test Steps**:
  1. Go to SoundFabric.
  2. Leave the text prompt field empty.
  3. Click the "RUN" button.
- **Expected Result**: An error message is displayed indicating the prompt is required.

### NTC-04: Invalid Deployment Parameters
- **Preconditions**: Developer account is created.
- **Test Steps**:
  1. Log in to the account.
  2. Go to the deployment section.
  3. Fill the form with incorrect or incomplete information and submit.
- **Expected Result**: Deployment fails with a clear error message indicating missing or incorrect parameters.

### NTC-05: Insufficient $OFN Tokens
- **Preconditions**: Developer account is created, but there is an insufficient $OFN balance.
- **Test Steps**:
  1. Log in to the account.
  2. Attempt to deploy an AI-App.
- **Expected Result**: Deployment is blocked with an error message indicating insufficient funds.

### NTC-06: Deploy Duplicate AI-App
- **Preconditions**: An AI-App is already deployed.
- **Test Steps**:
  1. Log in to the account.
  2. Attempt to deploy an AI-App with the same parameters as an existing one.
- **Expected Result**: Deployment fails with an error message indicating duplication.

### NTC-07: Unauthorized Deployment Attempt
- **Preconditions**: The user is not logged in, or the account lacks deployment permissions.
- **Test Steps**:
  1. Navigate to the deployment section.
  2. Attempt to deploy an AI-App.
- **Expected Result**: Deployment is blocked with an error message indicating a lack of authorization.

### NTC-08: Deployment Under High Network Load
- **Preconditions**: There is a high transaction volume on the network.
- **Test Steps**:
  1. Attempt to deploy an AI-App during peak network usage.
- **Expected Result**: Deployment may be delayed but should eventually complete, or a clear message is provided if it cannot be processed.

### NTC-09: Generate QR Code with Insufficient Data
- **Test Scenario**: User attempts to generate a QR code without providing sufficient data.
- **Preconditions**: User is logged into the Openfabric testnet and has access to QRFabric.
- **Test Steps**:
  1. Navigate to the QRFabric application.
  2. Leave the data input field partially filled or empty.
  3. Attempt to generate the QR code.
- **Expected Result**: The application displays an error message indicating that more data is required to generate a QR code.

## Conclusion

These test cases are designed to validate the functionality and user experience of the User module within the Openfabric testnet, specifically focusing on the applications for image, meme, and music generation, as well as AI-App deployment and QR code creation. By executing these tests, we can ensure that the module meets the needs of its users, providing a seamless and intuitive experience. The "Actual Result" and "Status" for each test case should be filled out during the testing process to document the outcomes.
