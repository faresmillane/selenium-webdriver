
// Used in steps to confirm status
// ex: Then I have a <ok> status / Then I have a <conflict> status ...
const Status = {
    ok: 200,
    created: 201,
    no_content: 204,
    bad_request: 400,
    unauthorized: 401,
    forbidden: 403,
    not_found: 404,
    conflict: 409,
    gone: 410
};

const User = {
    unknow: 'unknow',
    new: 'new',
    registered: 'registered',
    otp: 'otp',
    oney4x: 'oney4x',
    oney4x: 'oney8x',
    oney4x: 'oney12x',
    paypal: 'paypal',
    card: 'card'
};

const Gender = {
    MALE: 'male',
    FEMALE: 'female',
    OTHER: 'other'
};

module.exports = {
    Status,
    Gender,
    User,
};