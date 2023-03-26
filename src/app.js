import { User } from './db/models/users.js'
import { connect } from './db/index.js'

async function main() {
    await connect()
    await User.create({
        name: "Aram",
        email: "sdas@dsfsd.cc",
        password: "ankap",
        role: 'seller'
    })

    const u = await User.findOne({
        where: {
            email: 'sdas@dsfsd.cc'
        }
    })
    const success = await u.comparePasswords('ankap')
    console.log('----- compare success: ', success);
}

main();
