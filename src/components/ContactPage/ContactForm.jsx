import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineDevicePhoneMobile,
  HiPaperAirplane,
} from 'react-icons/hi2';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, 'Debe tener al menos 3 caracteres')
        .max(25, 'Debe tener un maximo de 25 caracteres')
        .required('Debes ingresar tu nombre'),
      email: Yup.string()
        .email('Ingresa un correo electronico valido')
        .required('Debes ingresar un correo electronico'),
      telefono: Yup.number().min(8).max(14).optional(),
      mensaje: Yup.string()
        .min(10, 'Debe tener al menos 10 caracteres')
        .max(250, 'Limite de caracteres alcanzado')
        .required('Debes ingresar un mensaje para enviar'),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  console.log(formik.errors);

  return (
    <form className='space-y-4 mt-2' onSubmit={formik.handleSubmit}>
      <div className='relative'>
        <div className='absolute flex items-center justify-center inset-y-0 w-10'>
          <HiOutlineUser className='text-zinc-500/90' />
        </div>
        <input
          type='text'
          name='nombre'
          placeholder='*Ingresa tu nombre completo'
          className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />
      </div>

      <div className='relative'>
        <div className='absolute flex items-center justify-center inset-y-0 w-10'>
          <HiOutlineEnvelope className='text-zinc-500/90' />
        </div>

        <input
          type='email'
          name='email'
          placeholder='*Ingresa un correo electronico'
          className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <div className='relative'>
        <div className='absolute flex items-center justify-center inset-y-0 w-10'>
          <HiOutlineDevicePhoneMobile className='text-zinc-500/90' />
        </div>
        <input
          type='tel'
          name='telefono'
          placeholder='Ingresa un numero de contacto'
          className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
          onChange={formik.handleChange}
          value={formik.values.telefono}
        />
      </div>

      <div className='relative'>
        <textarea
          name='mensaje'
          rows='5'
          maxLength='250'
          placeholder='*Escribe un mensaje...'
          className='w-full rounded-md bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400 p-3 py-4'
          onChange={formik.handleChange}
          value={formik.values.mensaje}></textarea>

        <span className='absolute top-0 right-1 text-[10px] text-zinc-400'>
          {250 - formik.values.mensaje.length} / 250
        </span>
      </div>

      <span className='italic text-zinc-400 text-xs'>* : Campos obligatorios.</span>

      <button
        type='submit'
        className='flex items-center justify-center gap-1 w-full rounded-md bg-black text-zinc-200 uppercase text-xs font-bold h-12'>
        Enviar
        <HiPaperAirplane />
      </button>
    </form>
  );
};

export default ContactForm;
