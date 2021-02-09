/* eslint-disable */
import { ca } from 'win-ca/api'
import withOut from 'without'


async function getCerts() {
    await fetch().then(render)

    function fetch() {
        var list = []
        return new Promise(resolve => {
                ca({
                    store: 'My',
                    async: true,
                    // format: ca.der2.txt,
                    format: ca.der2.pem,
                    ondata: list,
                    onend: resolve
                })
            })
            .then(_ => list)
    }

    function render(list) {
        document.body.innerHTML = withOut(t)(list)
    }

    function t(roots) {
        for (let pem of roots) {
            textarea(pem)
        }
    }
}

export default getCerts