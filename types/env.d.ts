declare var process: Process

interface Process {
  // prebuild-time env variables
  env: PreBuildEnv;
}

interface PreBuildEnv {
  COMMIT_HASH: string
  APP_VERSION: string
}

export interface Window {
  // postbuild-time env variables, loaded on start-up
  env: PostBuildEnv
}

interface PostBuildEnv {
  IPFS_API_URL: string
  IPFS_GATEWAY_URL: string
  IPFS_PINATA_API_URL: string
  IPFS_PINATA_API_TOKEN: string
  FIXED_CHAIN_ID: string
}
