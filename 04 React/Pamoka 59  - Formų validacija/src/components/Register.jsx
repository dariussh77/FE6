import {useFormik} from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const values={
        email:'',
        userName:'',
        avatarURL:'',
        password:'',
        passwordConfirm:'',
        age:''
    };
    const validationSchema= Yup.object({
        email:Yup
            .string()
            .email('Tai ne mailas')
            .required('Prašau užpildyti laukelį'),
        userName:Yup
            .string()
            .required()
            .min(3, 'Reikia bent 3 simboliu')
            .max(15, 'Ne daugiau 15 simbolių'),
        avatarURL:Yup
            .string()
            .url('Tai nėra nuoroda'),
        password:Yup
            .string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,
                "Min 8 siboliai, Bent viena didžioji, Bent viena, mažoji, Bent vienas skaičius, Bent vienas specialusis simbolis"
            )
            .required(),
        passwordConfirm:Yup
            .string()
            .oneOf([Yup.ref('password'),null],'Slaptažodiai nesutampa'),
        age:Yup
            .number()
            .moreThan(12, 'Jūs amžius neatitinka reikalavimų')
            .required() 

    });
    const formik=useFormik({
        initialValues:values,
        validationSchema:validationSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    });
    return ( 
    <main>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            name="email" id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.email && formik.errors.email &&
            <p
              style={{ color: 'red' }}
            >{formik.errors.email}</p>
          }
        </div>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input 
            type="text"
            name="userName" id="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.userName && formik.errors.userName &&
            <p
              style={{ color: 'red' }}
            >{formik.errors.userName}</p>
          }
        </div>
        <div>
          <label htmlFor="avatarURL">Avatar URL:</label>
          <input 
            type="url"
            name="avatarURL" id="avatarURL"
            value={formik.values.avatarURL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.avatarURL && formik.errors.avatarURL &&
            <p
              style={{ color: 'red' }}
            >{formik.errors.avatarURL}</p>
          }
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input 
            type="number"
            name="age" id="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.age && formik.errors.age &&
            <p
              style={{ color: 'red' }}
            >{formik.errors.age}</p>
          }
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            name="password" id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.password && formik.errors.password &&
            <p
              style={{ color: 'red' }}
            >{formik.errors.password}</p>
          }
        </div>
        <div>
          <label htmlFor="passwordConfirm">Repeat the password:</label>
          <input 
            type="password"
            name="passwordConfirm" id="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
            <p
              style={{ color: 'red' }}
            >{formik.errors.passwordConfirm}</p>
          }
        </div>
        <input type="submit" value="Register" />
      </form>
    </main>
     );
}
 
export default Register;