import rasko from "../../assets/img/rasko.png";
import quai from "../../assets/img/quai.png";
import eye from "../../assets/img/eye.png";
import comics from "../../assets/img/comics.png";
import { useEffect, useRef } from "react";

export const MainImg = (props) => {
  const elementRef = useRef();

  useEffect(() => {
    const divElement = elementRef.current;
    const width = divElement.getBoundingClientRect().width;
    props.setWidthSvg(width);
  }, [props]);

  return (
    <svg viewBox='0 0 1135 900' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        ref={elementRef}
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M1135 -5.44168e-08L641 0L641 284.119C765.383 288.078 865 390.156 865 515.5C865 640.845 765.383 742.922 641 746.881L641 900L1135 900L1135 -5.44168e-08Z'
        fill='#F4F7FD'
      />
      <circle cx='636' cy='515' r='203' fill='#F4F7FD' />
      <g filter='url(#filter0_d_1001_1537)'>
        <path
          d='M464 412.044L291.044 278.747C288.945 277.129 286.369 276.252 283.719 276.252H59.3778'
          stroke='white'
          stroke-width='2'
          stroke-dasharray='4 4'
        />
        <animate
          attributeName='stroke-dashoffset'
          dur='1s'
          repeatCount='indefinite'
          begin='0ms'
          values='0; 16;'
        />
      </g>
      <g filter='url(#filter1_d_1001_1537)'>
        <circle cx='51' cy='276' r='16' fill='#5A70FF' />
      </g>
      <circle cx='51' cy='276' r='9' fill='white' />
      <line
        x1='677.628'
        y1='438.971'
        x2='747.813'
        y2='280.393'
        stroke='#005BBC'
        stroke-width='3'>
        {/*    <animate attributeName='y1' dur='1s' from='595.25' to='438.971' />
        <animate attributeName='y2' dur='1s' from='745.432' to='280.393' /> */}
      </line>
      <line
        x1='755.25'
        y1='493.409'
        x2='905.432'
        y2='406.701'
        stroke='#005BBC'
        stroke-width='3'>
        {/*    <animate attributeName="x1" dur="1s" from="662.299" to="595.25" />
        <animate attributeName="x2" dur="1s" from="749.007" to="905.432" /> */}
        {/* <animate attributeName='y1' dur='1s' from='595.25' to='493.409' />
        <animate attributeName='y2' dur='1s' from='745.432' to='406.701' /> */}
      </line>
      <line
        x1='731.388'
        y1='564.551'
        x2='898.895'
        y2='609.434'
        stroke='#005BBC'
        stroke-width='3'>
        {/*    <animate attributeName='y1' dur='1s' from='595.25' to='564.551' />
        <animate attributeName='y2' dur='1s' from='745.432' to='609.434' /> */}
      </line>
      <line
        x1='662.299'
        y1='595.25'
        x2='749.007'
        y2='745.432'
        stroke='#005BBC'
        stroke-width='3'
      />
      <g filter='url(#filter2_di_1001_1537)'>
        <circle cx='636' cy='515' r='172' fill='#F4F7FD' />
      </g>
      <g filter='url(#filter3_di_1001_1537)'>
        <circle cx='636' cy='515' r='119' fill='#F4F7FD' />
      </g>
      <path
        d='M701.696 592.02H637C594.399 592.02 560 557.489 560 515.02C560 493.719 568.6 474.535 582.624 460.511C596.515 446.619 615.699 438.02 637 438.02C658.301 438.02 677.617 446.619 691.376 460.511C698.388 467.523 703.945 475.858 707.914 485.119C711.883 494.248 714 504.435 714 515.152C714 532.087 708.576 547.698 699.182 560.399C697.198 563.31 694.816 565.956 692.302 568.47L670.076 545.978C677.749 537.908 682.38 527.059 682.38 515.02C682.38 502.451 677.352 491.205 669.149 483.002C660.947 474.8 649.436 469.772 637 469.772C624.564 469.772 613.186 474.8 604.983 483.002C596.78 491.205 591.753 502.451 591.753 515.02C591.753 540.025 611.995 560.267 637 560.267V527.456L701.696 592.02Z'
        fill='url(#paint0_linear_1001_1537)'
      />
      <circle cx='968' cy='369' r='71' stroke='#005BBC' stroke-width='3' />
      <circle cx='787' cy='807' r='71' stroke='#005BBC' stroke-width='3'>
        {/* <animate attributeName='cx' dur='1s' from='0' to='787' />
        <animate attributeName='cy' dur='1s' from='0' to='807' /> */}
      </circle>
      {/*  <g filter='url(#filter6_di_1001_1537)'></g> */}
      <circle cx='968' cy='626' r='71' stroke='#005BBC' stroke-width='3' />
      <mask
        id='mask0_1001_1537'
        maskUnits='userSpaceOnUse'
        x='751'
        y='769'
        width='73'
        height='77'>
        <rect x='751' y='769' width='72' height='76' fill='#C4C4C4' />
      </mask>
      <image
        x='729'
        y='167'
        width='112px'
        height='112px'
        href={rasko}
        xlinkHref={rasko}></image>
      <image
        x='912'
        y='572'
        width='112px'
        height='112px'
        href={eye}
        xlinkHref={eye}></image>
      <image
        x='912'
        y='315'
        width='112px'
        height='112px'
        href={quai}
        xlinkHref={quai}></image>
      <image
        x='729'
        y='755'
        width='112px'
        height='112px'
        href={comics}
        xlinkHref={comics}></image>
      {/* <g filter="url(#filter7_di_1001_1537)">
        <circle
          cx="787"
          cy="221"
          r="56"
          fill="url(#paint4_linear_1001_1537)"
          
        />
      </g> */}
      <circle cx='787' cy='221' r='71' stroke='#005BBC' stroke-width='3'>
        {/* <animate attributeName='cx' dur='1s' from='0' to='787' />
        <animate attributeName='cy' dur='1s' from='0' to='807' /> */}
      </circle>
      <mask
        id='mask1_1001_1537'
        maskUnits='userSpaceOnUse'
        x='742'
        y='181'
        width='90'
        height='80'>
        <path
          d='M814.961 256.172H742L787.137 181H798.266L831.655 249.966L825.472 257.552L821.762 261H819.907L814.961 256.172Z'
          fill='#C4C4C4'
        />
      </mask>
      <g mask='url(#mask1_1001_1537)'>
        <rect x='730' y='188' width='115' height='102' fill='url(#pattern3)' />
      </g>
      <defs>
        <filter
          id='filter0_d_1001_1537'
          x='54'
          y='270'
          width='415'
          height='147'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='2.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d_1001_1537'
          x='0'
          y='225'
          width='102'
          height='102'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='17.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 0.981667 0 0 0 0 0.981667 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
        </filter>
        <filter
          id='filter2_di_1001_1537'
          x='441'
          y='320'
          width='391'
          height='391'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='11.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.508333 0 0 0 0 0.499014 0 0 0 0 0.499014 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-6' dy='12' />
          <feGaussianBlur stdDeviation='6' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect2_innerShadow_1001_1537'
          />
        </filter>
        <filter
          id='filter3_di_1001_1537'
          x='494'
          y='373'
          width='285'
          height='285'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='11.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.508333 0 0 0 0 0.499014 0 0 0 0 0.499014 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-5' dy='9' />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect2_innerShadow_1001_1537'
          />
        </filter>
        <filter
          id='filter4_di_1001_1537'
          x='898'
          y='311'
          width='132'
          height='132'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-4' dy='8' />
          <feGaussianBlur stdDeviation='5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-1' dy='4' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect2_innerShadow_1001_1537'
          />
        </filter>
        <filter
          id='filter5_di_1001_1537'
          x='717'
          y='749'
          width='132'
          height='132'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-4' dy='8' />
          <feGaussianBlur stdDeviation='5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-1' dy='4' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect2_innerShadow_1001_1537'
          />
        </filter>
        <filter
          id='filter6_di_1001_1537'
          x='898'
          y='568'
          width='132'
          height='132'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-4' dy='8' />
          <feGaussianBlur stdDeviation='5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-1' dy='4' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect2_innerShadow_1001_1537'
          />
        </filter>
        <pattern
          id='pattern0'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'>
          {/* <use
          xlink:href="#image0_1001_1537"
          transform="translate(-0.0446428) scale(0.000265939)"
         /> */}
        </pattern>
        <filter
          id='filter7_di_1001_1537'
          x='717'
          y='163'
          width='132'
          height='132'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-4' dy='8' />
          <feGaussianBlur stdDeviation='5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_1001_1537'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_1001_1537'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dx='-1' dy='4' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect2_innerShadow_1001_1537'
          />
        </filter>
        <filter
          id='filter8_iii_1001_1537'
          x='931'
          y='331'
          width='36'
          height='76'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1001_1537'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_innerShadow_1001_1537'
            result='effect2_innerShadow_1001_1537'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_1001_1537'
            result='effect3_innerShadow_1001_1537'
          />
        </filter>
        <filter
          id='filter9_iii_1001_1537'
          x='967.661'
          y='331'
          width='37'
          height='80'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='shape'
            result='effect1_innerShadow_1001_1537'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_innerShadow_1001_1537'
            result='effect2_innerShadow_1001_1537'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_innerShadow_1001_1537'
            result='effect3_innerShadow_1001_1537'
          />
        </filter>
        <pattern
          id='pattern1'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'>
          {/* <use
          xlink:href="#image1_1001_1537"
          transform="translate(-1.0138) scale(0.00540641 0.00265957)"
         /> */}
        </pattern>
        <pattern
          id='pattern2'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'>
          {/* <use
          xlink:href="#image1_1001_1537"
          transform="translate(-1.0138) scale(0.00540641 0.00265957)"
         /> */}
        </pattern>
        <pattern
          id='pattern3'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'>
          {/*  <use
          xlink:href="#image2_1001_1537"
          transform="translate(-0.00536776) scale(0.00196641 0.00223214)"
         /> */}
        </pattern>
        <linearGradient
          id='paint0_linear_1001_1537'
          x1='598'
          y1='593'
          x2='704'
          y2='426'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#74EAE8' />
          <stop offset='1' stop-color='#0394E8' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_1001_1537'
          x1='978'
          y1='324'
          x2='968'
          y2='425'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#F4F7FD' />
          <stop offset='1' stop-color='#F2F4F3' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_1001_1537'
          x1='797'
          y1='762'
          x2='787'
          y2='863'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#F4F7FD' />
          <stop offset='1' stop-color='#F2F4F3' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_1001_1537'
          x1='978'
          y1='581'
          x2='968'
          y2='682'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#F4F7FD' />
          <stop offset='1' stop-color='#F2F4F3' />
        </linearGradient>
        <linearGradient
          id='paint4_linear_1001_1537'
          x1='797'
          y1='176'
          x2='787'
          y2='277'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#F4F7FD' />
          <stop offset='1' stop-color='#F2F4F3' />
        </linearGradient>
        <linearGradient
          id='paint5_linear_1001_1537'
          x1='969'
          y1='636'
          x2='1013'
          y2='635'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#48D1FE' />
          <stop offset='1' stop-color='#FDA4FF' />
        </linearGradient>
        <linearGradient
          id='paint6_linear_1001_1537'
          x1='923'
          y1='631'
          x2='965'
          y2='631'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#7423FB' />
          <stop offset='0.919153' stop-color='#09DEFE' />
        </linearGradient>
        <linearGradient
          id='paint7_linear_1001_1537'
          x1='927'
          y1='632'
          x2='1010'
          y2='629'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#6100FF' stop-opacity='0.85' />
          <stop offset='0.382867' stop-color='#08E0FE' />
          <stop offset='0.993948' stop-color='#FDA4FF' />
        </linearGradient>
      </defs>
    </svg>
  );
};
