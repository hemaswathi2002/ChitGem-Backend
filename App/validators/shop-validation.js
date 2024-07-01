
const shopRegisterValidationSchema = {
 

  shopName: {
    notEmpty: {
      errorMessage: '* shopname is required',
    },
    trim: true,
  },
  

    "address.area": {
      notEmpty: {
        errorMessage: '* Area is required',
      },
      trim: true,
    },

    "address.pincode": {
      notEmpty: {
        errorMessage: '* Pincode is required',
      },
      isNumeric: {
        errorMessage: '* Enter only numbers',
      },
      isLength: {
        options: { min: 6, max: 6 },
        errorMessage: 'Enter a valid 6-digit pincode',
      },
    },
    "address.city": {
      notEmpty: {
        errorMessage: '* City is required',
      },
      trim: true,
    },
    "address.state": {
      notEmpty: {
        errorMessage: '* State is required',
      },
      trim: true,
    },



  "contact.email": {
    notEmpty: {
      errorMessage: "* email is required"
    },
    isEmail : {
      errorMessage : "* email must be in email format"
    },normalizeEmail : true, trim : true
  },

  "contact.mobile" : {
    notEmpty : {
      errorMessage : "* mobile is required"
    },
    isNumeric : {
      errorMessage : "* mobile must contain only numbers"
    },
    isLength : {
      options : {min:10,max:10},
      errorMessage : "* mobile must contain 10 digits"
    }
  },

description: {
    notEmpty: {
      errorMessage: 'enter the description',
    }
    // isLength: {
    //   options: {min: 25,max: 500},
    //   errorMessage: 'description should have minimum of 50 words',
    // },
  },

}

module.exports = shopRegisterValidationSchema
