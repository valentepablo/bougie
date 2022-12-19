import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineDevicePhoneMobile,
  HiPaperAirplane,
} from 'react-icons/hi2';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const formRef = useRef();
  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .min(3, 'Debe tener al menos 3 caracteres')
            .max(25, 'Debe tener un maximo de 25 caracteres')
            .required('Debes ingresar tu nombre'),
          email: Yup.string()
            .email('Ingresa un correo electronico valido')
            .required('Debes ingresar un correo electronico'),
          telefono: Yup.string().min(8).max(14).optional(),
          mensaje: Yup.string()
            .min(10, 'Debe tener al menos 10 caracteres')
            .required('Debes ingresar un mensaje para enviar'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          emailjs
            .sendForm('service_jlg6tb3', 'template_7tdw3la', formRef.current, 'NROPyf0cTyXw_gyrE')
            .then(
              (result) => {
                toast.success('Consulta enviada con exito!');
              },
              (error) => {
                toast.error('Error al enviar la consulta, intenta nuevamente por favor');
              }
            );

          resetForm();
          setSubmitting(false);
        }}>
        <Form ref={formRef} className='space-y-6 mt-2'>
          <div className='relative'>
            <div className='absolute flex items-center justify-center inset-y-0 w-10'>
              <HiOutlineUser className='text-zinc-500/90' />
            </div>
            <Field
              type='text'
              name='nombre'
              placeholder='*Ingresa tu nombre completo'
              className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
            />
            <ErrorMessage
              name='nombre'
              component='p'
              className='absolute mt-px ml-px text-[10px] text-red-500'
            />
          </div>
          <div className='relative'>
            <div className='absolute flex items-center justify-center inset-y-0 w-10'>
              <HiOutlineEnvelope className='text-zinc-500/90' />
            </div>
            <Field
              type='email'
              name='email'
              placeholder='*Ingresa un correo electronico'
              className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
            />
            <ErrorMessage
              name='email'
              component='p'
              className='absolute mt-px ml-px text-[10px] text-red-500'
            />
          </div>
          <div className='relative'>
            <div className='absolute flex items-center justify-center inset-y-0 w-10'>
              <HiOutlineDevicePhoneMobile className='text-zinc-500/90' />
            </div>
            <Field
              type='text'
              name='telefono'
              placeholder='Ingresa un numero de contacto'
              className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
            />
          </div>
          <div className='relative'>
            <Field
              as='textarea'
              name='mensaje'
              rows='5'
              maxLength='250'
              placeholder='*Escribe un mensaje...'
              className='w-full rounded-md bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400 p-3 py-4'></Field>
            {/* <span className='absolute top-0 right-1 text-[10px] text-zinc-400'>
              {250 - } / 250
            </span> */}
            <ErrorMessage
              name='mensaje'
              component='p'
              className='absolute mt-px ml-px text-[10px] text-red-500'
            />
          </div>
          <button
            type='submit'
            className='flex items-center justify-center gap-1 w-full rounded-md bg-black text-zinc-200 uppercase text-xs font-bold h-12'>
            Enviar
            <HiPaperAirplane />
          </button>
          <span className='italic text-zinc-400 text-xs'>* Campos requeridos.</span>
        </Form>
      </Formik>
      <Toaster
        position='bottom-center'
        toastOptions={{
          success: {
            className: 'uppercase text-xs font-semibold',
            duration: 3000,
            style: {
              background: 'rgb(187 247 208)',
              color: '#000',
              border: '1px solid #bbb',
            },
          },
          error: {
            duration: 3000,
            style: {
              background: 'rgb(254 202 202)',
              color: 'rgb(127 29 29)',
            },
          },
        }}
      />
    </>
  );
};

export default ContactUs;
