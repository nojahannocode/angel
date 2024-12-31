// import React from 'react';
// import {DatePicker} from "antd";
// import dayjs from "dayjs";
// import moment from "moment";
//
function AntDatePickerJalali(props) {
    return (
        <div>
            <div className={`flex flex-col gap-1`}>
                <span className={`font-medium`}>{date}</span>
                <DatePicker
                    value={formik.values.published_at ? dayjs(formik.values.published_at, {jalali: false}).add(210, "minute") : null}
                    format="YYYY-MM-DD HH:mm:ss"
                    status={formik.errors.published_at && "error"}
                    showTime
                    onChange={(date, dateString) => {

                        const utcDate = moment(date?.toDate()).utc().format('YYYY-MM-DD HH:mm:ss');
                        formik.setFieldValue("published_at", convertDigits(utcDate, {to: 'en'}));
                    }}
                />

            </div>
        </div>
    );
}

export default AntDatePickerJalali;