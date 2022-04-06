const HexGenerate = (len) => {

    var hex_nmbs = '0123456789abcdef'
    var str = 'abcdef'
    var a = str[(Math.floor(Math.random() * 6))]
    for (var i = 0; i < len-1; i++) {

        a += hex_nmbs[(Math.floor(Math.random() * 16))]

    }
    return a
}

var Q_Formatter = (q, params) => {

    var p = 0
    var i = -1
    try {

        while (true) {

            var r = HexGenerate(3)
            if (q.indexOf('?', i + 1) == -1) {

                break

            } else {

                var a = ' NULL '
                i = q.indexOf('?', i + 1)
                if (params[p]) {
                    a = typeof params[p] != 'number' ? `$${r}$${params[p]}$${r}$` : `${params[p]}`
                }
                if (i == 0) {

                    q = a + q.slice(i + 1)

                } else {

                    q = q.slice(0, i ) + a + q.slice(i + 1)

                }

                i += a.length
            }
            p++

        }

        return q

    } catch (e) {

        console.log(e)
        return q

    }
}


module.exports = {

    Q_Formatter

}
