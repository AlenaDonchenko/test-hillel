import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import formikValidation from "./formikValidation.css";


const validationSchema = Yup.object({
    name: Yup.string().required('Ім\'я обов\'язкове для заповнення'),
    email: Yup.string()
        .email('Невірний формат Email')
        .required('Email обов\'язковий для заповнення'),
    phone: Yup.string()
        .matches(/^\d{12}$/, 'Телефон повинен містити 12 цифр')
        .required('Телефон обов\'язковий для заповнення'),
});

export default function FormValidation(){
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values,null, 2))
        },
    });

    return (
        <div className={"main-form"}>
            <h1>Форма</h1>
            <form className={"form"} onSubmit={formik.handleSubmit}>
                <div className={"input-form"}>
                    <label htmlFor="name">Ім'я</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className={"input-form"}>
                    <label htmlFor="email">Електронна пошта</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className={"input-form"}>
                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div>{formik.errors.phone}</div>
                    ) : null}
                </div>

                <button type="submit">Відправити</button>
            </form>
        </div>
    );
};

