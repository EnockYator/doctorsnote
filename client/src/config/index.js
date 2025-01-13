
// configuration file


export const loginFormControls =[
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password',
    }

];

export const registerCustomerFormControls =[
    {
        name : 'userName',
        label : 'Full Name',
        placeholder : 'Enter your name',
        componentType : 'input',
        type : 'text',
    },
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password',
    },
];

export const registerAdminFormControls =[
    {
        name : 'userName',
        label : 'Full Name',
        placeholder : 'Enter your name',
        componentType : 'input',
        type : 'text',
    },
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password',
    },
    {
        name : 'adminCode',
        label : 'Admin Code',
        placeholder : 'Enter your secret code',
        componentType : 'input',
        type : 'number',
    },
];

export const registerDoctorStepOneFormControls =[
    {
        name : 'userName',
        label : 'Full Name',
        placeholder : 'Full Name',
        componentType : 'input',
        type : 'text',
    },
    {
        name : 'gender',
        label : 'Gender',
        placeholder : 'Select Gender',
        componentType : 'select',
        options: [
            { id: "male", label: "Male" },
            { id: "female", label: "Female" },
            { id: "prefer_not_to_say", label: "Prefer not to say" }
        ]
    },
    {
        name : 'country',
        label : 'Country',
        placeholder : 'Select Country',
        componentType : 'select',
    },
    {
        name : 'city',
        label : 'City',
        placeholder : 'Select City',
        componentType : 'select'
    },

];

export const registerDoctorStepTwoFormControls =[
    {
        name : 'specialization',
        label : 'Specialization',
        placeholder : 'Enter Your Specialization',
        componentType : 'input',
        type : 'text',
    },
    {
        name : 'institution',
        label : 'Hospital or Institution',
        placeholder : 'Enter Hospital/Institution Name',
        componentType : 'input',
        type : 'text',
    },
    {
        name : 'certificate',
        label : 'Upload Medical Licence',
        componentType : 'input',
        type : 'file',
    },

];

export const registerDoctorStepThreeFormControls =[
    {
        name : 'email',
        label : 'Email',
        placeholder : 'Enter your email',
        componentType : 'input',
        type : 'email',
    },
    {
        name : 'password',
        label : 'Password',
        placeholder : 'Enter your password',
        componentType : 'input',
        type : 'password',
    },
    {
        name : 'confirmPassword',
        label : 'Password',
        placeholder : 'Confirm password',
        componentType : 'input',
        type : 'password',
    },

];