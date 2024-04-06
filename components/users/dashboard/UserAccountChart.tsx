import ComponentsChartsArea from '@/components/charts/components-charts-area';

type Props = {}

const UserAccountChart = (props: Props) => {
    const data = [1000, 800, 900, 1100, 1300, 1100, 700]
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return (
        <div className="lg:col-span-2">
            <ComponentsChartsArea
                title={'User account'}
                data={data}
                labels={labels}
                chartname='User'
            />
        </div>
    )
}

export default UserAccountChart