type EnvVariables = {
  DEV_TO_API_KEY: string;
};

function getEnvVariable(key: keyof EnvVariables): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Varaibe ${key} is not defined!`);
  }

  return value;
}

export const env = {
  DEV_TO_API_KEY: getEnvVariable('DEV_TO_API_KEY'),
} as const;
