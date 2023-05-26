
import { Avatar, Badge, Button, Chip, Icon, ListItem } from "@rneui/themed"
import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from "react-native"

const Results = () => {

    const gamesList = [
        {
            name: 'Florian Toribio',
            avatar_url: 'https://cdn.dribbble.com/users/472238/screenshots/10698419/notion-dylan-dribbble.png',
            subtitle: '5 match - 3 victoires',
            isWin : true,
            eloDif: 15
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpV_4apepRy-BmldsB4foSKuskAd-LM1kyVg&usqp=CAU',
            subtitle: '2 match - 1 victoire',
            isWin : false,
            eloDif: 18
        },
        {
            name: 'Amelia Jones',
            avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ALGyBou8A49h0qni6rsiOqHlqQ7Smmcil6-GYwlH4XXpZFcDDILw3kESm4_JjPLEsrA&usqp=CAU',
            subtitle: '3 match - 2 victoires',
            isWin : false,
            eloDif: 15
        },
        {
            name: 'Jessica Jackson',
            avatar_url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSFRUYGBgZGBwYEhgZGBgYGBkYGBgaGRgYGBgcIS4lHB4rHxgZJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISGDEhISExMTQ0NDQ0NDE0NDQ0MTQ0NDQxNDQ0NDQxNDExNDQxNDQ0NDQ0NDQxNDQ0NDQ/NDQ/NP/AABEIANoA5wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADwQAAIBAQQHBgMGBQUBAAAAAAECABEDBCExBRJBUWFxkSIygaGxwUJy0QYTUoKy4SMzYvDxFBWSosLS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAQEBAAMBAQEBAQEBAAAAAAECEQMhMRJBMmFRIhP/2gAMAwEAAhEDEQA/APPpIGQkhEwTrIkxVjQI4MlWQjwCcYRxFAijxCOBAFSICHXPR5cFqhQMKmpqdwAlx0O2x1P/ACHtDjSeLVnZGbSMyzSOirTcp5N9aQd7o4OqUYHZUUHU4ecOFfHqfwIoipNBdFW34OrJ/wDUl/s1t+Af80+sOK//AD1/4zlj0mj/ALNbgY2beFG9DBbSwZcGUqdzAj1gm41PsUGKTKRqQSgRC7hdQ5LNgi97ea5KIMRD7u9EVRxY8yaegEG3hx+tey009XUDBEGoqjAAkBjQdOkz6TRYa+sDtI8lWh8oN/pHqQKGm2oGfMwsaeXw6t7mBohCbS5uFLUBpmAQSONIMkGGsaz9nCAiMeRaCSrFEDFJAYxwZBjHBlBOPWQDSUCOI8iJIQCUUUcCAkSAltjZlmCjMmg+vhn4Sy5XN7Q0XADvMcFXmd/Ca13uiI3ZqSBQscKk50XZh+qORtjxW+/4Js7MKoUZDAfX3lqrGQitJbZkEVBqJTskOqyerHGdPHp/mWFawVxBEoKCTCSCMVOq2R7rex4+sJAgcVaskztQjAjcw1h4gy3VjFIj4xLfRyPUqPu2GYGK1+U7OREy7zo50FSKqPiXEeO0eM6e8WHxL3h5j8JlesSNZc+PmD6Q4w34c6/5XIFZNLWlFOA3+PlNq83BLQFl7D/9SdoYDuniOkw7e7MjFXBBGYPtvHGJzya8V6KFAMdvOtfrLLNqY0NDnvFOG2B3dqGh/Lw3iGI5OQ64fvB2+PU1OxdYnEkHaCP+Igd/uoU/eJ3WNGH4W+hhgXV7QGB7w9x9ItUMGU5NgacgQR44wX5MTeOf1jGQMsZSCQcwaHmMDKzE8qzhRRRQILqyQjRAwB44MaOIEkI4jCab6FtgNYIHFK1RlfDfQGsZzNvyABCrldC7UrRR3m3cBvJlNhYl2CDM+VMyeAm9Y2YRQi5DqTtJ4wjXxePt7fi1KKoRRRRkPcnaeMV2GFd+PU1HlSQtD2T0HM4CEIJTskU3i01VdtwAHPZ+qT0Of4Y4EjzgeknopG9x5IP2hOhW7H5j7QE+tBzSh4+uHuJeGgN9eiOa5Akcxl5x7reg61GY7w3GCu+xxocDK0dl7JxPwE7RuPGRDxPiKdOB3iBjLJwRUSwTOu1qQxRszjwJ2kc86bwYerQVKdhArRdVuDfqH1Hpxh1YNeUqpAzzHMYiAsAWq6r12Nn8wGfiPQSm92Suuq+FO621fqOEvvDBk1t3a5FcaeVJzt8vYJq2NRVVPlhlFWepL6qpgFILEYNQUxrsJB3cYYrHYPMTDe1LGp/xuE0rheCRq0JI4jLxMReKTPqNSyJ2geBr7SWoBkKSpbUjNW8j5A1krVsARvHQ4e8bq76Zl/WjkjaK+IwPoD4wUw6/pQLzavjQ+0BJk15XnzzdKKRrFBiGrHEjHEYSjiRElAJAzcutoyBVBIoKjHI/EOuPWAaPsgRrHOvZ4cedfSEsC1BXHLDftPgKwdvhx+c/q/0atoXY2hABYapIFCwBzPE+wlolaimEjeLXUQtuGHPZKWDv967YUZKwrxNR6TaUzlCf36zpLnaayKeGPMYGELN7WdpR+3q7jXqq/SF6EbsN83/kQLSw7dd6g+o9oXoU9hvm/wDIgc/0I0s9LMjeQP76THs7ZkItF3DW3HnCNMW9WCbsTzOXl6wSyFVA4YydUtX26C7XsOKjxG6WffEnVGzvH25zmEtmRuycfbjNq43hWWi57Qc+J4ypTzroq/k6otFzQhhxG0dIddb0rqGU4Hy4GB1qKHbMi4Xo2TlSezWjfWCv1yus15F2lKvHZoNOszST6iWlN1V/NgfOvWchaOSSTiTOo+0QP3dRvAb5SQfUCcq0VY6+mEuu9vqMG68oOZINEUvHS2VsrAFSDHtGw6eZmJc7YA6rZHI7QeB2TTY5CtcfTH6RunOuxTf3rQbifTLzgTQi9sKhRsHmxqf74wYya83z67umiiigxIARowcbx1ja43xp5Uqx5Xrj+wZLXAx4j1gqZvWnqaoFMCBTnX98ZddlGsSPhGr4nE+OXUwexetDXDEj0oeVTDbstFB34nxxjj0v5yLhANLPQKvNj4Ye8PmNpR6vTcAPf3jqNfA2yauhrfNPzL7zK98BJWblGqPhOHL/ABJ6nN5Wnple43MH1HvLNFvq2bMctYnoAPaRvbh7LWGztcqZjoTM/wD1HYFmMqktxNTQRnby9RtrQsS524ze+z90ZgWyWmrUjHZXVHuekwbKzLMFAqSQAOc7R2S72Ha1qAAHVFWJJ2eMz3U0Bf8AQCn+WwU5hWNa78c5zbhkYg1VlNDvBhl9+0TglbJPuzkzP2n8a+9ZhPeXZtd3LE94k1NIZ7/U/p0F10rsceI9xBr8wL6wNQwr/fQyu8XR0prDA4qwxVgciD7Sky+9X+uuk0RetZNU5rh4bJolpzGi7bVcbjgfab1ta0VjuBPlKjXOvTOFp95d3U5qp8sV9JzLTY0ZaUfVOTAqfaZLpTl6RVFvVRj0jkRBd3SIiWGXW9kYHHCi8Of97JS90cAFhqg5b+myOoAwEGe/L+fU+rWYnE5nEyJMasVYOW3t6UUaKIBdcxtYxqx42xCIb4hHWAgq6OdbU2NRT4mlZ0YnO6PxtE5+gr7TesLTW1uDERx0yrhMC8NV3P8AUR509hN8Tn0UsaAVLHAczWFLS7Rt0No4VajHMbN56esP0/okWWraKxKnstUioOzLZnNe5WdndbPWtGCk5k58lGZ8JiXnSn+pf7iyCjXw17U1Y7eyMlywAmX6trPoG7XgoSDipwYfSVKNmdMOkneLBkYowoVND7EcDFd7JmYIoqWNBz+n0mnT63PsvdNZzaEYKKL8xzpyHrOqMHuN1WzRbNdgxO87T1hBmGr29Dy+/vrWjtvdj/2MayuTtktBvOAmst2UWloCO0rsMdgJqCBLbV9VSx2Csv8AX8c2tWa5G79nmFpdkDgMAChBxHZJA8oHpT7PqFZ7NqUBJU4igGw5iF6CQpd0U501j+YlveX6Qtv4T/I36TI/VldUzeOLR6EEbDUTc0jbfwyfxUA8cfSYJhV6t6oi8Knw7I9DOiKl9B0ehB3EHoZbdyPvRu1iDuoTT3lFZ0Wj/s6SFd3pkdVc9+LH6Sdak+p6pfRFlWuqRwBNJdZXVE7igcRn1hl8tbCy7OoHfce0R8zGtOUuUWRshaNZp3a01RnkAMNpk/v/AIr9f8c9pcdz83tMkzV0qtAg3Aj9MyjNHL5f9Uo1YoxMTM9YpEGKADRSDvQjjJwbEI6xolgB2jP5i+P6TNK4P23XeSR4EzN0Wf4i+PoZc76lqTuavXH3jbZvpsXt9VGPD1wmh9n9GaiC0amuw7O3VWmHjvmTpFv4Z40nQ6EttawQ7l1T+U09pHk+Hpyf2k0cbPUZ3Z3fW1mOWFKBRsGMxFBrhWoxFMxTGs7T7W2OubKuWsynmQCP0zK1FRTQUFDXptMmX0596/N4L0taC0srC01f4jgZZkUxHHtHDxmeqvZuKgq6kEA/3iJ0+gbkq2Vm7Dt6gAr8INThurWH3q5paCjqDu3jkcxFNc9NiuF6FogcfmG47RCJmXPR33Lllc6h7ysOhrNOTZ/4GJpbQ5d/vbMgPSjqe6wGWOwwOy0O7EG11QoNdRTXWIy1ju4TppU6xdKYzb2gnMztK2lLJ+IA6kCalokw/tA9AtntJ1jyGA8/SPM7W9s/LBMiWkjIha+03ZCLtY6zon4itfFiPQTpNK6XpWzszSmDuNnBfrMF0Ic0NNRVFRvIA9zGEnU9ixJa/vt8ZuLaVRLP4UArxenoK9eUx7vZF21R+Y7h9ZrldUADKtPIwznt6vM/rL01mn5v/MyGmvprNOTe0x2MtyeX/VImQrETGLRM04pDWjQAW3Woj2TVEslbJTEdINkqxwcZAPvwj7YAfos/xV/N+kyd5ato/Bqf9RKNGn+KnFwv/I6vvJXk0trTi7AeDECNpm+h5ttaxKnNSB4bJs/Zi9dl7PcQw5EUPmPOcypmtoBDrltgWh5kig8jI38aT3XR3+yFqhQmlcVO5hiD1mLZaNtXYI6BVr/EfWBqB+EZ48Zrq0KsjMYNePN90UmAoNmUeRWVl2PdFBvb2X/EEHthUqP6q9ASPP0lsGtbMgBtYkqdamHIigG4mEIwIqMtkYPGIjxRAPbsFUs2AAqZybWFpeXLqhoTgTgqjYK/SdkyAihAI3HKICOXh9ctpHRKWNgSTrOWUaxyGNSFGzLOZdwsdZxuGJ8MvObn2ovIotmN+s3QgDzgejbHVWpzbHw2TXHbDzO1C0SiOxzdwfDWAXyFfGZ72mwZ+Q5zU0r/AC6cR9ZioJVns9fWvoQ98cj6zRt8h8y/qAmToZ6ORvX0M1rcVU03Yc9kqLz/AJZmnBgh+f8A8TDZOM2tONVUPzeYSYxaFcfm/wBVFklf3YlzSDSWRtURRxGgFUiZKRMGxMK5yIFDwkozHbAHRiGDDDVIZeYNQZba2uuzPlrMzcqsTKaxwYH0XZPX3nT/AGeobMgDEMdbjXEH28Jyd3prCpoKip4VxnaaO0Q9k+srqyEUatQ1NmGVZGvjTOhy2cJs1kwkkFma7rqQikWcAVJoN8Ge/L8ILchQdT7QRaMMpRdWuPZzA3b/AAgjXl23Ly7R6nDyMrKVxPa549BkIcTdDWvSD4q8sfSRN7GxWPgB6kShRJqsB1P/AFR/Aeq/WVWt8eh1Ux2VIpLAsi4gX6rm7S7uzguN5bEY4jdDhJ3nv/lHqZCb5+N8fFF9si6hQaVbPkCZmW9xdKkrUZ1GI8domyc15n9JhiCLWuVnvXNObuD0dTxp1wm+TBr9o4Ei0QAMDUjIN9DLFeoqJWddaY12MjSx7KDdrjpqj2mUZp6ZOIHFiORC+4My6xuXzf6JmkY5jSWRRRooBTGj1jQbFEYooBCskDHQ0IriK4iHoqNiFXoIunwHZiuAxPCdvoTSvYWztTRgKBthAwxOw5Tm0wyh9wzJ3D1P7SbP0rM9uwa0UCpIA3k0EDtb/XBB+Y5eA2zHuygANtOPKuwbhCA8j8i6XtiasdY7zs5DISQMpVpI2gAqSAOMaO9XrJiZr6TQd0FvIShtLt+FRzrFym21kxM663p3zs6D8ROqOhxMK1Ce+1f6RgPHaYiTa22KKnb+Eczv4SDoxzfwUU8zU+kmCBgMJF3jMBb98/Kvq0jIfeBmdgaioFeQH1k5vn46M/IiT21HAn0HvDLMzIv9oylCpoe1/wCY1npRhmoPlI1PbLf1sXm1CqWbAAYzOudrrprbSWqOZJ95nX++s5ApRRiBWtTxl+iX7y8iPQ+0eZxXjnKq04ndbmvXEehmOTOg0qmtZtwo3Q4+VZzxlVl55zRRAyJiETA5MUYxQCqKRrHrBseKNFAHj2TkYjx4yMre0ofWKnGtY2obLxmro8dknefT96zm7HWzUGdXYJqqF3DHnt84ZaYnvp7J6dg814r+2XSWNaBRUmglIxetMAKE8eHLHrLtUHMA8xJ19RuToN9Is2CDxprHoIkudo5qxp8xx6TSQSq2vyJh3juHuYkw9hotR3iT5CGWN2RMVQA76VPU4zHfSj7KDwrHTSjnAAE8ASegi5TbxaRZwMSaTEtb5bUqVKj5afqllncHcBnelcaZmnoIcHBN40mi4DtHhl1g/wB3aWuLnVXdtPh9Ydd7miZDHecTLWgGbZWYXWUZa3PYJdIIcz/UfUyc2nx0Z+KnQFhUA9k5gHasjaaOVsV7J4ZeI+ks+Lw9/wBoXZSNX2y39c1e7FkNGFCMd9RvBktHvRxxw+nnOodARiK/vOVvVkbNyo2Gq8sx9PCGddGa2bVNZSu8EdRScoePjOrR6gHeKzndKWepaMNhow/MK+tZpR552ShDGrGJjVkuZKsUjWPAlMVY0UGx4gY0VYA7vQSlFqYj2jCEWkDaGh7Grg7FxPsOuPhOgEC0VYaiAnNu0eWzy9YZWVG+ZyATe2QlCAaZca41kv8AcqfCOsrNzdyTQAEkiuZFcMOULu2jlHex4DATO8Y651Cye0tcB2V2mhA5bzC7LRaDvEt40HlC0Sgwkbzbai1zOSjeTlJ6lmX9EBFmiCu2gqa7BWadwuuotNpxY8dw4Su4XPV7b4ufIHZz3wi924RC234eJitNn6TtNdxZjYQDzOHlNgDZMPR1mWcMchUk7z/kibsKDSpzLTBr0ey3I+eAhBAllkOQlkjHrN3TEAe2flHq0KsjAbJ6s/Ahegr7wyyMy19Ya/0MEwNP2faVt4IPgaj1M3kMzNOWdUr+FgfA4H18pM+pzfYTR1pVKfhNPDZA9Pp3H4FT4Go9T0jXC11Xocjh9IZpOy17MgZjtDwz8qzdtqfrNc2ZGOY0lxnrGiigFcUUUGpSBNcBltjkV5SQFIA6LTKG6Pu2u4B7oxfkNnjlBFE6S4XbUSnxHFjx3eEcXnPaLJis01u0cvhG/ifpI2aa2J7uwb+PKFCTrX8PWv5CAlirEqy0YTNmYsAKnKV2FkS33j5/APwj/wCjEnbOv8I7g3/1H26wkCAPWgqdmMxbV2tnAGWzgNpMI0jeCx+6TH8XE7oXdbuLNeObH+9kDPdrMLUDIUUepPmOkvrKrDugnbifHH3kyYiOTBb2ezTeR6g+0vJgt6PdHGvQH6ys/VZ+q6xExpTe31UY8KdcJs6FVwaoZt7k+k0bIzN0f3BzPqYdd3rXnSZVzX6PQym+2esjLvUgc6YSxDGeSTjy22bl2tddA3gee2Y15TVdl3MelcITou1oxQ5HEcxNo3zWXe7HUdl2A4cjiIOZt6bsKqLQbMG5HLz9ZiQrm3n864UUVYokBQ5OUmoijiDVKIRhHgbY0Rcq0tWGHwDf/Vy3TVUaxp8I73E/h5b+m+SPoop0k7t3F+UekLWmv/melwk0EistWZ1kmolTds0+Ed7+oj4eQ29N8ste6eR9JC791flHpAL1lF+vWotB3jlw4y9Jl3n+d+YekQgzR111Rrt3j5D6wi8d2m/DrgfKWSm2zX5j+loBOMTEIjAGJgd4PaHI+ZELaB2/f/L7mVn6vH01Zn6VtMl8T6D3h8x7/wB8+HpNa218HXMUReVeuMKuxwPzH1g127ifKPSEXXLxb9RmVc9aCGO5kLOSaSTmdKLS0bjQ+Q9wYIjkGozGUO0z/M/IPVpnzWfGufjcwtE4MKHgf8zmHQqSpzBofCdBorutz9pk6X/mt4eglUvLPUoKsUaKS53/2Q==',
            subtitle: '1 match - 1 victoire',
            isWin : true,
            eloDif: 15
        },
    ]

    function getIcon(isWin: boolean): any {
        if (isWin) {
            return (
                <Icon name="arrow-drop-up" size={30} color="green"  />
            )
        } else {
            return (
                <Icon name="arrow-drop-down" size={30} color="red" />
            )
        }
    }


    return (
        <View>

            {
                gamesList.map((l, i) => (
                    <ListItem key={i}>
                        <Avatar
                            rounded
                            source={{ uri: l.avatar_url }}
                            size={50}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Content right={true}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Chip
                                    ViewComponent={LinearGradient} // Don't forget this!
                                    linearGradientProps={{
                                        colors: ['#00B09B', '#96C93D'],
                                        start: { x: 0, y: 0.5 },
                                        end: { x: 1, y: 0.5 },
                                    }}
                                    buttonStyle={{ width: 65 }}
                                    titleStyle={{ fontSize: 15 }}
                                    title={l.eloDif.toString()} 
                                    containerStyle={{ marginVertical: 10 }}
                                />
                                {getIcon(l.isWin)}
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View >
    )
}

export default Results