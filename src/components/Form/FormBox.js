import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const borderVariants = {
  hidden: {
    transform: 'scale(0)',
  },
  visible: i => ({
    transform: 'scale(1)',
    transition: {
      delay: i * 0.1,
    },
  }),
};

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  subject: Yup.string().required('Subject required'),
  message: Yup.string().required('Write your message'),
});

const FormBox = ({ message, setMessage, inViewRef, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!inViewRef)
      setTimeout(() => {
        controls.start('visible');
      }, 3000);
    if (inView)
      setTimeout(() => {
        controls.start('visible');
      }, 500);
  }, [controls, inView, inViewRef]);

  const SendEmail = async (values, { setSubmitting, resetForm }) => {
    if (!message) {
      try {
        const response = await emailjs.send(
          'service_v6r0gwo',
          'template_23ejwfc',
          values,
          'm5XfHncj3LDBOoIOq'
        );
        if (response.status === 200) {
          resetForm();
          setMessage(true);
          setSubmitting(false);
        }
      } catch (err) {
        console.log(err.text);
      }
    }
  };

  return (
    <div
      className="overflow-hidden  box-border relative  w-11/12 md:w-2/3 lg:w-2/5 md:h-4/5  h-5/6 bg-zinc-900 rounded-lg  lg:ml-0 ml-3
      before:top-[-50%] before:left-[-50%]  before:animateBorder  before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-transparent before:via-rose-500   before:to-rose-600 before:origin-bottom-right
      after:top-[-50%] after:left-[-50%]  after:animateBorder  after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-transparent after:via-rose-500   after:to-rose-600 after:origin-bottom-right after:delayanim "
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={SendEmail}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {({ isSubmitting }) => (
          <Form>
            <div
              className=" absolute bg-zinc-900 inset-xs z-20 rounded-lg px-4 md:px-12 py-10 flex flex-col"
              ref={inViewRef}
            >
              <div className="absolute left-0 top-0 h-full w-full bg-formbg z-neg aspect-spacer2 rounded-lg inset-xs bg-center  bg-cover"></div>

              <h2 className="text-rose-500 font-bold font-logo underline tracking-wider text-xl md:text-3xl  md:mb-5 ">
                Contact Me
              </h2>
              <div className="relative w-full mt-9 flex">
                <div className="flex flex-col md:flex-row gap-7 md:gap-0  w-full justify-between md:mb-12 mb-7">
                  <div className=" md:w-[47%] relative">
                    <Field
                      type="text"
                      name="name"
                      autoComplete="new-name"
                      className="peer form-input"
                      required={true}
                    />
                    <span
                      className="form-label peer-valid:translate-x-2 
                                    peer-valid:translate-y-[-25px] md:peer-valid:translate-y-[-36px] peer-focus:translate-y-[-25px] md:peer-focus:translate-y-[-36px] 
                                    peer-focus:translate-x-2"
                    >
                      Name
                    </span>
                    <motion.i
                      className="absolute left-0 bottom-0  w-full   h-[2px] 
                               bg-rose-500 rounded-md trd pointer-events-none 
                               peer-valid:h-8 md:peer-valid:h-11 peer-focus:h-8  md:peer-focus:h-11 origin-left    z-10"
                      variants={borderVariants}
                      animate={controls}
                      initial="hidden"
                      custom={0}
                    ></motion.i>
                    <ErrorMessage name="name">
                      {errMsg => (
                        <div className="text-rose-500 absolute bottom-[-24px] text-[12px] md:text-base">
                          {errMsg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="w-full md:w-[48%] relative   ">
                    <Field name="email">
                      {({ field, meta }) => (
                        <>
                          <input
                            type="email"
                            name="email"
                            className="peer form-input"
                            autoComplete="off"
                            required={true}
                            {...field}
                          />
                          <span
                            className={
                              meta.error === 'Email is required'
                                ? 'form-label  peer-valid:translate-y-[-25px] md:peer-valid:translate-y-[-36px] peer-focus:translate-y-[-25px] md:peer-focus:translate-y-[-36px] peer-focus:translate-x-2'
                                : meta.touched && meta.error
                                ? 'form-label translate-x-2 translate-y-[-25px]   md:translate-y-[-36px] md:peer-focus:translate-y-[-36px] peer-focus:translate-y-[-25px] peer-focus:translate-x-2'
                                : 'form-label peer-valid:translate-x-2 md:peer-valid:translate-y-[-36px] md:peer-focus:translate-y-[-36px]  peer-valid:translate-y-[-25px] peer-focus:translate-y-[-25px] peer-focus:translate-x-2'
                            }
                          >
                            Email
                          </span>
                          <motion.i
                            className={
                              meta.error === 'Email is required'
                                ? 'absolute left-0 bottom-0 origin-left  w-full   h-[2px] bg-rose-500 rounded-md trd pointer-events-none md:peer-valid:h-11 md:peer-focus:h-11 peer-valid:h-8 peer-focus:h-8   z-10'
                                : meta.error && meta.touched
                                ? 'absolute left-0 bottom-0  w-full origin-left  h-8 md:h-11 bg-rose-500 rounded-md trd pointer-events-none md:peer-valid:h-11 md:peer-focus:h-11 peer-valid:h-8 peer-focus:h-8 z-10'
                                : 'absolute left-0 bottom-0  w-full  origin-left h-[2px] bg-rose-500 rounded-md trd pointer-events-none md:peer-valid:h-11 md:peer-focus:h-11 peer-valid:h-8 peer-focus:h-8 z-10'
                            }
                            variants={borderVariants}
                            animate={controls}
                            initial="hidden"
                            custom={2}
                          ></motion.i>
                        </>
                      )}
                    </Field>
                    <ErrorMessage name="email">
                      {errMsg => (
                        <div className="text-rose-500 absolute bottom-[-24px] md:text-base text-[12px]">
                          {errMsg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>
              <div className="relative lg:mb-12 mb-5">
                <Field
                  type="text"
                  name="subject"
                  className="peer form-input"
                  required={true}
                  autoComplete="off"
                />
                <span className="form-label peer-valid:translate-x-2 peer-valid:translate-y-[-25px] lg:peer-valid:translate-y-[-36px] peer-focus:translate-y-[-25px] lg:peer-focus:translate-y-[-36px] peer-focus:translate-x-2">
                  Subject
                </span>
                <motion.i
                  className="absolute left-0 bottom-0 origin-left w-full   h-[2px]  bg-rose-500 rounded-md trd pointer-events-none peer-valid:h-8 md:peer-valid:h-11  peer-focus:h-8 md:peer-focus:h-11  z-10"
                  variants={borderVariants}
                  animate={controls}
                  initial="hidden"
                  custom={4}
                ></motion.i>
                <ErrorMessage name="subject">
                  {errMsg => (
                    <div className="text-rose-500 absolute bottom-[-24px] md:text-base text-[12px]">
                      {errMsg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="relative mb-9">
                <Field
                  as="textarea"
                  name="message"
                  type="text"
                  autoComplete="off"
                  className="peer resize-none form-input"
                  required={true}
                />

                <span className=" form-label peer-valid:translate-x-2 peer-valid:-translate-y-[85%] lg:peer-valid:-translate-y-[110%] peer-focus:-translate-y-[85%] lg:peer-focus:-translate-y-[110%] peer-focus:translate-x-2">
                  Message
                </span>
                <motion.i
                  className="absolute left-0 origin-left bottom-0  w-full   h-[2px]  bg-rose-500 rounded-md trd pointer-events-none peer-valid:h-14 peer-focus:h-14  md:peer-valid:h-20 md:peer-focus:h-20  z-10 "
                  variants={borderVariants}
                  animate={controls}
                  initial="hidden"
                  custom={6}
                ></motion.i>
                <ErrorMessage name="message">
                  {errMsg => (
                    <div className="text-rose-600 md:text-rose-500 absolute bottom-[-24px] md:text-base text-[12px]">
                      {errMsg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
              <div className="w-full h-full flex justify-end items-end">
                <motion.button
                  type="submit"
                  className="font-bold  tracking-wider relative h-8 md:h-11 py-2 px-7 md:px-8 uppercase text-white text-lg flex items-center justify-center
                           before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-rose-500 before:transition-transform before:duration-700 before:scale-0 before:ease-in-out before:origin-bottom-right hover:before:ease-in-out hover:before:transition-transform hover:before:duration-700 hover:before:origin-top-left hover:before:scale-100 before:z-neg
                           after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:z-neg after:border-2 after:border-white after:transition-transform after:duration-700 after:ease-in-out after:box-border after:origin-top-left after:scale-100 hover:after:transition-transform hover:after:origin-bottom-right hover:after:scale-0 hover:after:ease-in-out"
                  whileTap={{ scale: 0.8 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="mx-2 w-6 h-6 md:w-8 md:h-8 text-gray-200 animate-spin dark:text-gray-600 fill-rose-900"
                        viewBox="0 0 100 101"
                        fill="none"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    'Send'
                  )}
                </motion.button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormBox;
