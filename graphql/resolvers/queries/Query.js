const Query = {
    user: (parent, args) => {
        return {
            name: 'batuhan',
            createdAt: '05/05/2020'
        }
    }
}

module.exports = Query;