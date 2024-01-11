module.exports = {
    '*.{js,ts}': [
        'eslint "{src,apps,libs,test}/**/*.ts" --fix --max-warnings=0',
        () => 'tsc-files --noEmit',
    ],
    '*.{js,ts,json}': ['prettier --write'],
};
