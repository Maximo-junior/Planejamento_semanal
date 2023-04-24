export default function Appointment(props) {
  return (
    <li className={props.appointment.done ? "done" : ""}>
      <div>
        <input
          type="checKbox"
          id={`appointment-${props.appointment.id}`}
          onChange={() => props.togglDone(props.appointment.id)}
          checked={props.appointment.done}
        />

        <label htmlFor={`appointment-${props.appointment.id}`}>
          {props.appointment.name}
        </label>
      </div>
      <button onClick={() => props.removeAppointment(props.appointment.id)}>
        Remover
      </button>
    </li>
  );
}
