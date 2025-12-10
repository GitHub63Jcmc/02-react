export function Link ({ href, children, ...restOfProps}) {
  const handleClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);
  }
  return  (
    <a href={href} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  )
}