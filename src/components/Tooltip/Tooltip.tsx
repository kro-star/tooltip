import { useEffect, useState } from "react";

interface TooltipsProps {
  variant?: 'light' | 'black';
}

interface TooltipStyle extends React.CSSProperties{
  backgroundColor: string,
      color: string,
      zIndex: number,
      borderRadius: string,
      position:  'absolute',
      padding: string,
      left: string, 
      top: string,
}

function Tooltip(props: TooltipsProps) {
    const {  variant } = props
    const [ tooltipStyle, setTooltipsStyle] = useState<TooltipStyle>({
      backgroundColor: 'orange',
      color: 'rgb(19, 19, 153)',
      zIndex: 5,
      borderRadius: '10px',
      position: 'absolute',
      padding: '0.5rem 1rem',      
      left: '0px', 
      top: '0px',
    })

    const [visibleTip, setVisibleTip] = useState(false);

    const [text, setText] = useState<string | null>('');

    useEffect(() => {
      let timerId: ReturnType<typeof setTimeout>;
      
      window.addEventListener('mousemove', (event) => {
        if( (event.target as Element).getAttribute('data-tooltip') !== null)
        {
          setText((event.target as Element).getAttribute('data-tooltip'));
          if (variant === 'black'){
            setTooltipsStyle({
              ...tooltipStyle,
              backgroundColor: 'rgb(34, 34, 34)',
              color: 'white',
              left: (event.clientX + 15) + 'px',
              top:  (event.clientY + 15) + 'px',
            })
          } else {

              if (variant === 'light'){
                setTooltipsStyle({    
                  ...tooltipStyle,              
                  backgroundColor: 'gainsboro',
                  color: 'black',
                  left: (event.clientX + 15) + 'px',
                  top:  (event.clientY + 15) + 'px',
                })
              } else {
                setTooltipsStyle({    
                  ...tooltipStyle,
                  backgroundColor: 'orange',
                  color: 'rgb(19, 19, 153)',
                  left: (event.clientX + 15) + 'px',
                  top:  (event.clientY + 15) + 'px',
                })
              }
          }

          setVisibleTip(true);

          timerId = setTimeout(() => { setVisibleTip(false)}, 3000)
        }
      });

      //let k = {};
      // Object.assign(k, clName, coords);
      //setStyleTooltip(k);

      return () => {
        clearTimeout(timerId);
        window.removeEventListener(
          'mousemove',
          (event) => {
            setTooltipsStyle({
              ...tooltipStyle,
              left: (event.clientX + 5) + 'px',
              top:  (event.clientY + 5) + 'px',
            })
            }
        );
      };
    },[variant]);


    return <>
        { visibleTip ?
                <div  style={tooltipStyle}>
                    {text !== null ? text : ''}
                </div> : '' 
            }
    </> 
};

export { Tooltip };