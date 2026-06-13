import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { NoteMeta } from "@/lib/notes";

const FEATURED_IMAGE = "data:image/webp;base64,UklGRmQKAABXRUJQVlA4IFgKAACQTACdASoYAdIAP63I2WM8Mb+xKtkMs/A1iWNuiVs8LAOCEtk2bhnmIfif9jlu//8b/9YdHFk3iHCCyEvRHhyPJ0OUCiMSpCOgMa2VZ8eDYpSvkQ9f6NV6Y/8/X7JFQjAAGaKQNCiEGvsLE7hzBL08PDGQNrYLZjgA3E68L32WqtQt7t/b4YE3oLWP+4x/pZvh2dlFB5oTHGHsv4Cy5a9J7G33aqGgzkR43ydaiIZ1nc2Nw7STIc2yy8l6LDWKEgRAvrX5VvqGeIR+KHkN5JnvypeZ0QrzZeShfAnozNytxkZikxSDMtWI9nm7PtwtR1Om4lrKp021sCH7yvxqbyFJ92hV4IFCOqm7YRH4bY2aNWPEYzFkb/O3WU49Jo/6/Cn4jfgtw3ErcE9tGaUHedna1/tViyZos+bJDqK3sEDODdCUqYabhqqlFzWuy53UDDaQBl4aG4118fffO/nP+k0t4SFRwLbiIlA0cETEDhdpyCVpkXhOSnA1TsSJ71Qtp10WEJKyuNbhlAgnlJzankB2aAc8LqaCD/+qI2DpNlY1JjUsdSwuWjj1+q3CC3EWJ+JwxByZpp1AhUM9iAVL+k4mUOOI2S1HbHMM2ZitqIAW7aeBoq+tdt9hbgr6opkNxxXvPADaX/b/Tsxmyqcae1s0B+Z/C1D9ABKTbjYdEJy2BaSWln+R6jNOaufuK4eTFZB9VYBae19TBtqpW1qOk4LKf2Sc5Ts+xBy6fvhb3ILJx61btZBy2pf1tSWDQUj8S7qJ9X4dI/sO1f8ACh0ynCNDiSsfKWU05MrUQmc9t+vcEk6yPdMgCeN9TOuuzEAA/tC/6tJpF53J+lJ1ap5Gk5hQ6xS66ahr3bmZK1lZn5ObdBhS0oCsQo+0xtj373AseTaf9Cok7LTsHeuUVca8Aoi+OSsLABEaZ+ePfYs1y+7FyZNYQ28GESAL1QUs3H7KifaQICsogtx0PN/NuzvYKHh/W1ggBlU89JPoe+WZcCbXerHkXmjuk0fvRkapX93zoevdMy+cYzl+7NUDrIzooJk8PcNI2zSljQnEjwxKHhfTDsaO9iAPuC7ALnLA9FoyywJC7P0Y44jSSk7TXBK8ZIBlwRZAcUNiZxEqqf5b0cLLxoP9cqYSBKOocZIZFwFCsFem1oS1LhuO9ZiLEx/3VMoXGWPE6vVs+QjDA0zDD9cyNikIF4Ks7WbVu2IEpO6WxG/CVMCKtd/A8SChCpH1yQMtlh5ertk+M0JW/wf2SJVOE5zEyBE98IebpG4CB80nL6hTKcNc4nfbTshxMjgwUm8EmyUU3U6ADttyGQhTrIrlAYz9TpGZMtP49wTGOpSLqPi1Bv4gWW8LbnuJ6lHGTee2rF1Fr4nTBK7rJj4z4/iomDON2Fi73OMMRIqpLSWITvTk3SP2PS4Bl7yfc0bWPp0WsRuvGr2jbH1Ay3ZtiIbAx46JF4mfuGnXjkkerOFbGim4FMuDJyBBn74Uis6yEsFICEwC+611eLIeIrSHg6mhbJ+CdjllgEoHmmyhV3WELUi2lsK1UquEgrZ0fU97Er9e1LAV0m2ECV3zUSa7EbIEKHuXeSzpx4GZdYHaTnIi3aTouVwP5d9R2CTngkF27dBMyDcTncy9uiYI2N/FZBCoNoPTPGmNt8GVm3wQG2CC1XKRVSoMtYBXO2yJ29nyqnlHi+VDF83qspAdKoc0zzZIft1/y3ssxiyoejNc0ZhUluWKf5loYrnNCd64rOc/pR8jdyehvpG8PIzVm8jNgRFYrZRYa7oDcnu5Yzy/5SLP8oWntYAzt6Oh9W7bzWECm2VguTrRC77hTGcN2S1KXKgQkEHOjMsSKKfM2K7S2kjWeVvWZnc1xJLgECxm8YwbDgHGZOWPg+FVHegmmd9Ht+eL6VP0nWi9tORunEv8sX9VhSKTfFKt7KgSyi08DSOyYibe+AYr6SSdRKoo1AmBEQjPiZfVpuvulho7G9szeJ8BAS2APst8a6TyKxe2QLgUAGfp8bHigMrG+TviEKrnmVG/MOm2MmufpXZGPw+vnBkh/+KPV/ZuTtOAOilMJdvpKOLpBll3stjxZ23Bk6dVbv7mvZtoTwvgdmAvgV3s0pxzbuJYDdfhYhlsQHhkApZsj8ykIYtYvSxRpZeHeEmFZk6RCVJNfoxaxUMyTWxDBS6PG8ASJ+ltN8kjEhFwLMBKX4qHi0XJPiU9CWV55Kk86oIg7vjqVayCrII+G43hMQrTN0z5sYDVyvPRZNanbZ37hjCYNphov6MWwtLg32nT+787eBr1o4io7zURsPTcYLm+wyEHB5mQRxwbi5zgizsWV3wnTZnrB3Mz39CEqrV3gpKz0Yi94ufggBqT1UuMIAMgoIwPcerdqqYYy85t/8v/xkZFxWL0PWFCbNVGoDmIOY2gHFwqi1altDGGFOqjSMRfEO5yyCfCBZyqlKSMGKwHAItnbbqPvG1xdNLJ17Vs+u4h0xUZazk6IDn0XEo1ooZeKcOULqDmNNapByQx1lm6FBhchZMr50161YDQ91KSp37pxJjB6NAzO7GJH2iSsVEY3wTiMsyhyOJV14qDzRIzkls1oMxqVoBSR6s3s/ZD4gCSk+Gek/c1ZZlYo+D3D5EDnoYJpcIixc5Hm9xBS6YXC6kyKwGQNS7wsm6lXFwPZhFXU+FLtI649HLXM+/krFooyJn622i9jfcd7zJ/jWtregFNdQuDUoyB6c74O9HPUBY9+vZ0rn+yixq5RJP4bsRWeYUvFxnMlD9UG51cMikAk0I3AB7eZqKRxo3+HZ8rvici2Gd8aXZMwyrhDsIAg2yBYEEPc5C+tfjGY7iBygE8HUGbR/U2lthQjFOFVMy0DQeW9L/umaSxDwNYXhx6RS7roXkbRQOwjV960RXcPMW9x+zklvM8iSLRCPXTjEIjXi2IdBCTjVShvPP9ZY4MPcIOnWQMYnt9wVudx6C7uDXD00Fy6F8K/F6EEIIPNszp29UitTby+Xv23gvaaU5XLYQK1BHYmW8PpQoe/lc8MR9dpn0Lx4ZRODPaBoQ258B8W7v9LvAlD8o6r2O1dQfv6EyzHbQxNrlHuFGcJfExFgZGfTTlO0WO1Yz3A3elrxQLLPSRF5YZelxsDxBoKDnhQkOwHotujvKWaUIRqJ0P9JFpZwqvaofODuLPLz8yNFor+6ocrdN3A/tvlzVbPzSeTSQFNZyzEuhYzF2/EBXew7iF3w+JFx3VKsa4yXamUKiVOuUvvyDLk6yrBOMUl2YVPYm4iSJYlI/iCb1H7a0ajA+mGOfLaBrExI9whHO3WtEg/Qk/QFy9HOu2ftRCH8C0lgbnD7xpoYk2/wrBrX4PY0OFQYt/xqkIJTiFN5BWMpHtgIWF3w94BPY4mUfMo8xDdxCYs9YK2RuC+qjEOwMPTEFQwZP41m9LBqPjNuQZYaMLmHtL+h8qxCe5JbsSQ0SqbyOkNwe7YYIwBKFMXeMjlTQ5/zyYfQOM5tBqGqnfQeySnYSVTr14kEnWm5lYBYb+njI7Vmxosqp2WGgAAA==";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function HomeFeaturedSection({ note }: { note: NoteMeta }) {
  return (
    <section className="featured-work" aria-labelledby="featured-title">
      <Reveal className="section-heading">
        <div>
          <span className="section-code">Latest writing</span>
          <h2 id="featured-title">From the journal</h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <Link className="featured-entry" href={`/notes/${note.slug}`}>
          <span className="featured-entry__copy">
            <span className="entry-meta">
              <span>{formatDate(note.publishedAt)}</span>
              <span>{note.readingTime} min read</span>
            </span>
            <span className="entry-index">Xbox Game Camp Arizona</span>
            <strong>{note.title}</strong>
            <span className="entry-description">{note.description}</span>
            <span className="entry-action">Read essay <i aria-hidden="true">-&gt;</i></span>
          </span>

          <span className="featured-entry__visual">
            <img src={FEATURED_IMAGE} alt="Xbox Game Camp Arizona displayed outside the ASU MIX Center" />
            <span className="visual-caption">Xbox Game Camp Arizona</span>
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
