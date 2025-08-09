# How to configure github action on azure vps

## Create a new runner directory
mkdir frontend-action-runner

## Access the runner directory
cd frontend-action-runner

## Download runner 
curl -o actions-runner-linux-x64-2.327.1.tar.gz -L https://github.com/actions/runner/releases/download/v2.327.1/actions-runner-linux-x64-2.327.1.tar.gz

## Optional: Validate the hash
echo "d68ac1f500b747d1271d9e52661c408d56cffd226974f68b7dc813e30b9e0575  actions-runner-linux-x64-2.327.1.tar.gz" | shasum -a 256 -c

## Extract the installer
tar xzf ./actions-runner-linux-x64-2.327.1.tar.gz

## Create the runner and start the configuration experience
./config.sh --url https://github.com/gabriel-waltmann/gabriel-waltmann --token token-from-settings/actions/runners/new

## Run it
nohup ./run.sh &> runner.log &  

## Github Source:
https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/add-runners