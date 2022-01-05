import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

export const Chart = ({ chartData, color }) => {
    const { name, description, values } = chartData
    const chartValues = values.map((value) => value.y.toFixed())
    return (
        <div className="chart">
            <div>{name}</div>
            <Sparklines data={chartValues}>
                <SparklinesLine color={color} />
            </Sparklines>
            <div className="chart-desc">{description}</div>
        </div>
    )
}
