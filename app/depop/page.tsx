import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="bg-[url('/background.png')] bg-cover bg-center w-full h-full"
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <div className="mb-24 mt-[-200px]">
        <button className="text-center text-white text-8xl font-serif bg-yellow-800 rounded-2xl py-12 px-12">
          Depop
        </button>
      </div>
      <button className="bg-white rounded-lg mt-[-50px]">
        <div className="text-center text-yellow-900 text-2xl font-serif max-w-lg px-4 pb-4">
        Good Choice! Depop offsets 100% of their measured greenhouse gas emissions as they reduce their footprint, covering activities like shipping, packaging,and energy used by devices. 
        </div>
      </button>
      <div className="mt-4">
        <div className="flex flex-col items-center">
          <Link href="https://www.depop.com/?%243p=a_google_adwords&%24always_deeplink=false&%24canonical_url=https%3A%2F%2Fwww.depop.com%2F&~ad_set_id=128391973606&~campaign_id=15225507579&~channel=Brand&~keyword=depop&~placement&~campaign=DEPOP_GG_US_RTN_SEARCH_ALL_BRAND-DEFENCE&~feature=paidmarketing&gclid=Cj0KCQjwib2mBhDWARIsAPZUn_lNKJimeeXRs0KB-9hJ0L0hfCIOUQ0IQV2L-Yfwvjd6zuuAqzQihgwaAo9TEALw_wcB&_branch_match_id=771835174198663961&utm_source=Brand&utm_campaign=DEPOP_GG_US_RTN_SEARCH_ALL_BRAND-DEFENCE&utm_medium=paidmarketing&_branch_referrer=H4sIAAAAAAAAA41PWW%2BCQBD%2BNfqmIhQpTUizHFqVoKD2etmM7HLIslCObvTXl7UvfWwyDzPfNTNZ19Xt02xGaF3VU6jrKct5MXseqQ9abQFOqyplFAMRVUPa8QADE3BtMaG0llIrAdZSSQwNO0Nc4L5hViZzRxoaqcuhhBDT3w1xVQ6zlMfAK57HwP6lNzwguKUdzok1Vx81c24a2kJZSCaGsoY85XdOV1VdVwzdMO9UBpxTZtkNcCKBgl7lJ9Y9%2Fa%2FZcr39bo9XK3w64OgY4IOHIucFI9%2FHdoQCd%2BJ6Sy9wPGlKKHR9Q63BSUpoCtrlPB2nMRsucC7K1gkvIj%2BrpZ25byhat2j%2FeeKYBdtNXlL6HrXK1p6Y2UbxlSxx1rtTqKzDV9WffCTi%2B0IWt75HX7cwz1IBqDKPHvIFFrH9A7%2FXC8quAQAA">
            <button
              type="button"
              className="rounded-full bg-green-500 border-spacing-2 border p-5 text-white font-serif text-2xl"
            >
              Go shopping!
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
