const APP_NAME = "";
const ENV_PATH = "env";

module.exports = ({ appName = APP_NAME }) => ({
  run: [
    {
      method: "shell.run",
      params: {
        venv: ENV_PATH, // Edit this to customize the venv folder path
        path: appName,
        message: ["uv pip install -r requirements.txt"],
      },
    },
    //  Uncomment this step to add automatic venv deduplication (Experimental)
    {
      method: "fs.link",
      params: {
        venv: ENV_PATH,
      },
    },
    {
      method: "notify",
      params: {
        html: `Click the 'start ${appName}' tab to get started!`,
      },
    },
  ],
});
