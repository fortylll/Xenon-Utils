const chalk = require('chalk')

module.exports = {
    prefix: `${chalk.gray('[')}${chalk.blueBright('!')}${chalk.gray(']')}`,

    sendMessage(msg) {
        return console.log(`\n${this.prefix} ${chalk.bold(msg)}`);
    },
    errorMessage(msg) {
        return console.log(`\n${chalk.gray('[')}${chalk.red('ERROR')}${chalk.gray(']')} ${chalk.white(msg)}`)
    },
    infoMessage(msg) {
        return console.log(`\n${chalk.gray('[')}${chalk.yellow('INFO')}${chalk.gray(']')} ${chalk.white(msg)}`)
    },
    logMessage(msg) {
        return console.log(`\n${chalk.gray('[')}${chalk.yellow('LOG')}${chalk.gray(']')} ${chalk.white(msg)}`)
    },
    chalkMessage(msg, color) {
        return console.log(chalk[color](`${msg}`))
    },
    sendLogoMessage() {
        return console.log(
            chalk.black ("-----------------------------------------------------------------------\n"),
            chalk.blueBright("██╗  ██╗███████╗███╗   ██╗ ██████╗ ███╗   ██╗   "),chalk.white ("  ██████╗ ███████╗██╗   ██╗\n"),
            chalk.blueBright("╚██╗██╔╝██╔════╝████╗  ██║██╔═══██╗████╗  ██║   "),chalk.white ("  ██╔══██╗██╔════╝██║   ██║\n"),
            chalk.blueBright(" ╚███╔╝ █████╗  ██╔██╗ ██║██║   ██║██╔██╗ ██║   "),chalk.white ("  ██║  ██║█████╗  ██║   ██║\n"),
            chalk.blueBright(" ██╔██╗ ██╔══╝  ██║╚██╗██║██║   ██║██║╚██╗██║   "),chalk.white ("  ██║  ██║██╔══╝  ╚██╗ ██╔╝\n"),
            chalk.blueBright("██╔╝ ██╗███████╗██║ ╚████║╚██████╔╝██║ ╚████║   "),chalk.white ("  ██████╔╝███████╗ ╚████╔╝ \n"),
            chalk.blueBright("╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═══╝   "),chalk.white ("  ╚═════╝ ╚══════╝  ╚═══╝  \n"),
        )
    }
}
