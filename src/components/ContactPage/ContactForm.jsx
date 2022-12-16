import { useFormik } from 'formik';
import { HiOutlineUser, HiOutlineEnvelope, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className='space-y-4 mt-2' onSubmit={formik.handleSubmit}>
      <div className='relative'>
        <div className='absolute flex items-center justify-center inset-y-0 w-10'>
          <HiOutlineUser className='text-zinc-500/90' />
        </div>
        <input
          type='text'
          name='nombre'
          placeholder='Ingresa tu nombre completo'
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
          placeholder='Ingresa un correo electronico'
          className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
        />
      </div>

      <div className='relative'>
        <div className='absolute flex items-center justify-center inset-y-0 w-10'>
          <HiOutlineDevicePhoneMobile className='text-zinc-500/90' />
        </div>
        <input
          type='tel'
          name='telefono'
          placeholder='Ingresa tu numero de contacto'
          className='w-full rounded-md py-2 pl-10 pr-3 bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400'
        />
      </div>

      <div>
        <textarea
          name='mensaje'
          rows='5'
          placeholder='Escribe un mensaje...'
          className='w-full rounded-md bg-zinc-50 border placeholder:text-sm placeholder:text-zinc-400 p-3'></textarea>
      </div>

      <button
        type='submit'
        className='w-full rounded-md bg-black text-zinc-200 uppercase text-xs font-bold h-12'>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
