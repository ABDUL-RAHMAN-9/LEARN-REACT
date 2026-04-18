import React, { useState } from 'react';

const AddTask = ({ onAdd }) =>
{
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) =>
    {
        e.preventDefault();
        if (!text) return alert('Input objective details.');
        onAdd({ text, day, reminder });
        setText(''); setDay(''); setReminder(false);
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Objective_Target</label>
                <input type="text" placeholder="e.g., Security Audit v2" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Timestamp</label>
                <input type="text" placeholder="e.g., April 28 @ 09:00" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set_Priority_Flag</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Inject Task" className="btn-submit" />
        </form>
    );
};

export default AddTask;