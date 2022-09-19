import { FormControl, InputLabel, Select } from "@mui/material";

export default function SelectField({ children, text, value, onChange, name, disabled }) {
    return (
        <FormControl fullWidth style={{ marginBottom: '15px' }} disabled={disabled} required>
            <InputLabel id="select">{text}</InputLabel>
            <Select
                labelId="select"
                id="select"
                value={value}
                label={text}
                name={name}
                onChange={onChange}
            >
                {children}
            </Select>
        </FormControl>
    )
}