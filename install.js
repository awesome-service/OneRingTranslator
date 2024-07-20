const APP_NAME = "OneRingTranslator";
const ENV_PATH = `${APP_NAME}/env`;

module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone --recurse-submodules https://github.com/awesome-service/OneRingTranslator",
        ],
      },
    },
    {
      method: "shell.run",
      params: {
        venv: ENV_PATH, // Edit this to customize the venv folder path
        path: `app/${APP_NAME}`,
        message: ["pip install -r requirements.txt"],
      },
    },
    {
      method: "fs.link",
      params: {
        path: `app/${APP_NAME}`,
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
        html: `Click the 'start ${APP_NAME}' tab to get started!`,
      },
    },
  ],
};
