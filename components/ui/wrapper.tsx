interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Wrapper ({ children, className, ...props }: Props) {
    return (
        <section{...props} className={`flex flex-col py-20 md:py-24 lg:py-28 2xl:py-32 ${className}`}>
            { children }
        </section>
    )
}