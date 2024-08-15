interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Section ({ children, className, ...props }: Props) {
    return (
        <section{...props} className={`w-full px-4 sm:px-6 md:px-8 xl:px-16 flex justify-center items-center ${className}`}>
            { children }
        </section>
    )
}