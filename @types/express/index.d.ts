// https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5
// This modifies the express Request interface so we can attach userData to the request in the JWT middleware

import { CurrentUser } from '../../src/interface/CurrentUser'

declare global{
    namespace Express {
        interface Request {
            currentUser: CurrentUser
        }
    }
}