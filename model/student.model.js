const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    first_name: String,
    last_name: String,
    email: String,
    password:String,
                                    },
    {
        collection: "students"
    }
);
module.exports = mongoose.model('StudentSchema', studentSchema)