import fs from 'fs'

import yaml from 'js-yaml'

const defaultContent = fs.readFileSync('default.yaml', 'utf8')

// TODO: Custom config.yaml

export const yamlConfig = yaml.load(defaultContent) as {
    apollo: ApolloConfig
}

/* Config easy access */
export const apolloConfig: ApolloConfig = yamlConfig.apollo
