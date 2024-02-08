# AI-App Deployment Process Test Cases

## Positive Test Cases

### 1. Valid Deployment
- **Preconditions:** Developer account created, sufficient $OFN tokens available.
- **Test Steps:** Log in, navigate to AI Marketplace, select AI-App, click "create instance," fill required fields correctly, and submit.
- **Expected Result:** AI-App deployed successfully, ready for use.

### 2. Deployment Status
- **Preconditions:** AI-App submitted for deployment.
- **Test Steps:** Log in, go to the dashboard, locate deployed AI-App, and check its status.
- **Expected Result:** Current status of the AI-App is displayed.

### 3. Update AI-App
- **Preconditions:** AI-App deployed, updates ready.
- **Test Steps:** Log in, access AI-App details, upload new version, and submit.
- **Expected Result:** AI-App updated successfully, new version is active.

### 4. Retrieve Deployment Logs
- **Preconditions:** AI-App deployed.
- **Test Steps:** Log in, go to AI-App details, and access deployment logs section.
- **Expected Result:** Deployment logs displayed with detailed information.

### 5. Delete AI-App
- **Preconditions:** AI-App deployed and no longer needed.
- **Test Steps:** Log in, access AI-App details, and initiate deletion process.
- **Expected Result:** AI-App deleted successfully with confirmation.

## Negative Test Cases

### 1. Invalid Deployment Parameters
- **Preconditions:** Developer account created.
- **Test Steps:** Log in, go to deployment section, fill form with incorrect or incomplete information, and submit.
- **Expected Result:** Deployment fails with clear error message indicating missing or incorrect parameters.

### 2. Insufficient $OFN Tokens
- **Preconditions:** Developer account created, insufficient $OFN balance.
- **Test Steps:** Log in, attempt to deploy an AI-App.
- **Expected Result:** Deployment blocked with error message indicating insufficient funds.

### 3. Deploy Duplicate AI-App
- **Preconditions:** AI-App already deployed.
- **Test Steps:** Log in, attempt to deploy AI-App with same parameters as existing one.
- **Expected Result:** Deployment fails with error message indicating duplication.

### 4. Unauthorized Deployment Attempt
- **Preconditions:** User not logged in or account lacks deployment permissions.
- **Test Steps:** Navigate to deployment section, attempt to deploy AI-App.
- **Expected Result:** Deployment blocked with error message indicating lack of authorization.

### 5. Deployment Under High Network Load
- **Preconditions:** High transaction volume on the network.
- **Test Steps:** Attempt to deploy AI-App during peak network usage.
- **Expected Result:** Deployment may be delayed but should eventually complete or provide a clear message if it cannot be processed.

These test cases ensure a comprehensive evaluation of the AI-App deployment process on the Openfabric testnet. Testing should replicate real-world conditions to guarantee the reliability, user-friendliness, and security of the Openfabric ecosystem.
