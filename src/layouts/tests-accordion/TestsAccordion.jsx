import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

export default function TestsAccordion({ name, elevation, children }) {
    return (
        <Accordion elevation={elevation ? 0 : 1} sx={{ ":before": { backgroundColor: '#fff' } }}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {children}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}