import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "compact";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseStyles =
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold uppercase tracking-[0.18em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-brand-500 bg-brand-500 text-zinc-950 hover:border-brand-400 hover:bg-brand-400",
  secondary:
    "border-zinc-300 bg-white text-zinc-900 shadow-sm hover:border-zinc-400 hover:bg-zinc-50",
  outline:
    "border-white/35 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
  ghost:
    "border-transparent bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "min-h-12 px-6",
  compact: "min-h-10 px-4 text-xs",
};

export function buttonClasses({
  variant = "primary",
  size = "default",
  className,
}: Pick<CommonProps, "variant" | "size" | "className">) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export function Button(props: ButtonProps) {
  const { variant, size, className, children, ...rest } = props;
  const classes = buttonClasses({ variant, size, className });

  if ("href" in props) {
    const { href, ...linkProps } = rest as Omit<ButtonAsLinkProps, keyof CommonProps>;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as Omit<ButtonAsButtonProps, keyof CommonProps>)}>
      {children}
    </button>
  );
}
