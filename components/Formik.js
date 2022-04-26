import { useField } from "formik";

export default function MyInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label className="mylabel">{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div className="formerror">{meta.error}</div> : null}
    </>
  );
}

export function MySelect({ label, name, options, ...props }) {
  const [field, meta] = useField(name);

  return (
    <>
      <label className="mylabel" htmlFor={name}>
        {label}
      </label>
      <select {...field} {...props}>
        {options.map((option) => (
          <option key={option.name} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? <div className="formerror">{meta.error}</div> : null}
    </>
  );
}

export function MyTextArea({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        <div className="mylabel">{label}</div>
        <textarea {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div className="formerror">{meta.error}</div> : null}
    </>
  );
}
