import React, { Component } from 'react'

const weeks = ['日', '月', '火', '水', '木', '金', '土']

class Calender extends Component {
    render() {
        const startDate = new Date(this.props.year, this.props.month-1, 1) //月の最初の日を取得
        const endDate = new Date(this.props.year, this.props.month, 0) //月の最後の日を取得
        const endDayCount = endDate.getDate() //月の末日
        const startDay = startDate.getDay() //月の最初の曜日を取得

        return (
            <table>
                <tr></tr>
            </table>
        )
    }
}

export default Calender