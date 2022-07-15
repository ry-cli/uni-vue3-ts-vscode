// eslint-disable-next-line @typescript-eslint/no-var-requires
const { uniPostcssPlugin } = require('@dcloudio/uni-cli-shared')
module.exports = {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    plugins: [uniPostcssPlugin(), require('autoprefixer')()],
}
