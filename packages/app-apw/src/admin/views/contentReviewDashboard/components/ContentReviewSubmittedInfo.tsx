import React from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
// Extend dayjs format.
dayjs.extend(advancedFormat);

import { i18n } from "@webiny/app/i18n";
import { Box, Columns } from "~/admin/components/Layout";
import { Typography } from "@webiny/ui/Typography";
import { TypographySecondary } from "./Styled";

const t = i18n.ns("app-apw/admin/content-reviews/datalist");

export interface ContentReviewByProps {
    submittedBy: string;
    submittedOn: string;
}

export const ContentReviewBy: React.FC<ContentReviewByProps> = ({ submittedBy, submittedOn }) => {
    const formattedDate = dayjs(submittedOn).format("MMM Do, YYYY");

    return (
        <Columns space={2.5}>
            <Box>
                <Typography use={"caption"}>{t`Submitted by:`}</Typography>
            </Box>
            <Box>
                <TypographySecondary use={"caption"} style={{ textTransform: "capitalize" }}>
                    {t`{submittedBy}`({
                        submittedBy
                    })}
                </TypographySecondary>
                <TypographySecondary use={"caption"}>
                    &nbsp;
                    {t`on {submittedOn}`({
                        submittedOn: formattedDate
                    })}
                </TypographySecondary>
            </Box>
        </Columns>
    );
};
