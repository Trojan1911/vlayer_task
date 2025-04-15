type StatsProps = {
    awesomeSum: string,
    statsLabel: string,
}

export default function StatsSection({ awesomeSum, statsLabel }: StatsProps) {
    return (
        <section className="flex justify-center py-8">
            <div className="flex items-center gap-3 text-center">
                <div className="h-16 w-px bg-gray-300" />

                <div>
                    <p className="text-3xl font-bold text-primary text-indigo-600">{awesomeSum}</p>
                    <p className="text-gray-500 text-sm">{statsLabel}</p>
                </div>
            </div>
        </section>
    );
}