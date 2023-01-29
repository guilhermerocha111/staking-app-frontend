export default function Overlay({ children, withIcon = true }: { children: React.ReactNode, withIcon?: boolean }) {
  return (
    <div className="font-light absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-4 z-10 bg-design-background2 rounded-lg border border-design-blue min-h-max overlayWrap">
      {withIcon && (
        <div className="border-3 border-design-blue rounded-full aspect-square flex justify-center items-center p-4 mb-6 lockBorder">
          <img src="/images/lock2.png" alt="" />
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
