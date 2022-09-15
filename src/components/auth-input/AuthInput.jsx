import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";


export default function AuthInput({ text, value, label, type, showPassword, setShowPassword, disabled, onChange }) {
    return (
        <TextField
            id={text}
            label={label}
            variant="outlined"
            value={value}
            disabled={disabled}
            type={type ? showPassword ? 'text' : 'password' : 'email'}
            name={text}
            onChange={onChange}
            style={{ marginBottom: '15px' }}
            required
            fullWidth
            InputProps={{
                endAdornment: type === 'password' ? (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={e => e.preventDefault()}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ) : ''
            }}
        />
    )
}