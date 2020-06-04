const Query = {
    user: (parent, args) => {
        return {
            name: 'batuhan',
            surname: 'onur'
        }
    }
}

module.exports = Query;